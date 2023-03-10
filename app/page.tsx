import { Inter } from '@next/font/google'
import styles from './page.module.css'
import ClientEnvComponent from '../components/client/env-component'
import ServerEnvComponent from '../components/server/env-component'
import AsyncEnvComponent from "../components/server/async-component";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
    return (
        <main className={styles.main}>
            <nav style={{
                display: 'flex',
                gap: '1rem',
            }}>
                <Link href='/api/hello' style={{
                    backgroundColor: 'gray',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                }}>
                    API Route
                </Link>
                <Link href='/ssg' style={{
                    backgroundColor: 'gray',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                }}>
                    SSG Page
                </Link>
            </nav>
            <ClientEnvComponent />
            <ServerEnvComponent />
            <AsyncEnvComponent />
        </main>
    )
}
