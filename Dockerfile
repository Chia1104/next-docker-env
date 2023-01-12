FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json pnpm-lock.yaml ./

RUN yarn global add pnpm && \
    pnpm i

FROM node:16-alpine AS builder

WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ARG \
    BUILD_ENV \
    NEXT_PUBLIC_BUILD_ENV \
    SSG_PATHS_PREFIX
ENV \
    BUILD_ENV=${BUILD_ENV} \
    NEXT_PUBLIC_BUILD_ENV=${NEXT_PUBLIC_BUILD_ENV} \
    SSG_PATHS_PREFIX=${SSG_PATHS_PREFIX}

RUN yarn build

FROM node:16-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ARG \
    RUNTIME_ENV \
    NEXT_PUBLIC_RUNTIME_ENV \
    ASYNC_RUNTIME_ENV
ENV \
    RUNTIME_ENV=${RUNTIME_ENV} \
    NEXT_PUBLIC_RUNTIME_ENV=${NEXT_PUBLIC_RUNTIME_ENV} \
    ASYNC_RUNTIME_ENV=${ASYNC_RUNTIME_ENV}

USER nextjs

EXPOSE 8080

ENV PORT 8080

CMD ["node", "server.js"]
