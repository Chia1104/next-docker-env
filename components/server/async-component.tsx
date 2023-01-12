import { asyncComponent } from './asyncComponent.util';

const AsyncEnvComponent = async () => {
    const environment: string = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(process.env.ASYNC_RUNTIME_ENV as string)
        }, 1000)
    })
    return <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
    }}>
        <h1>
            Async Server Component
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
        <p>
            ASYNC RUNTIME ENV: <code>{environment}</code>
        </p>
    </div>
}

export default asyncComponent(AsyncEnvComponent);
