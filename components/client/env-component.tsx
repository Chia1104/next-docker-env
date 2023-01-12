'use client';

export default function EnvComponent() {
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
}
