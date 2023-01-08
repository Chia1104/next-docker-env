'use client';

import { Inter } from '@next/font/google'
import styles from '../page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function ServerComponent() {
  return (
    <main className={styles.main}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '33vh',
        gap: '1rem',
      }}>
        <h1>
          Client Component
        </h1>
        <p>
          RUNTIME ENV: <code>{process.env.RUNTIME_ENV}</code>
        </p>
        <p>
          BUILD ENV: <code>{process.env.BUILD_ENV}</code>
        </p>
        <p>
          PUBLIC RUNTIME ENV: <code>{process.env.NEXT_PUBLIC_RUNTIME_ENV}</code>
        </p>
        <p>
          PUBLIC BUILD ENV: <code>{process.env.NEXT_PUBLIC_BUILD_ENV}</code>
        </p>
      </div>
    </main>
  )
}
