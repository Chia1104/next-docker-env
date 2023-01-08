// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  runtime_env?: string
  build_env?: string
  public_runtime_env?: string
  public_build_env?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    runtime_env: process.env.RUNTIME_ENV, 
    build_env: process.env.BUILD_ENV,
    public_runtime_env: process.env.NEXT_PUBLIC_RUNTIME_ENV,
    public_build_env: process.env.NEXT_PUBLIC_BUILD_ENV
  })
}
