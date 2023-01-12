## Mini reproducible example with Docker environment setup

### Demo

- [Railway](https://next-docker-env-production.up.railway.app/)
- [Zeabur](https://next-docker-env-test.zeabur.app/)

### Routes

- `/` - Home page
- `/api/hello` - API route
- `/ssg` - Static Site Generation
- `/ssg/[id]` - Static Site Generation with dynamic route(`dynamicParams` to `false`)

### `[id]` params

`ssg_prefix` read from `.env` file

- `ssg_prefix_1`
- `ssg_prefix_2`
- `ssg_prefix_3`
