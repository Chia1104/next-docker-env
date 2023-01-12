import { Inter } from '@next/font/google'
import styles from '../../page.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
    const ssg_prefix = process.env.SSG_PATHS_PREFIX
    return [{ id: `${ssg_prefix}_1` }, { id: `${ssg_prefix}_2` }, { id: `${ssg_prefix}_3` }];
}

export const dynamicParams = false

export default function SSGIdPage({ params }: { params?: any }) {
    return (
        <main className={styles.main}>
            <nav style={{
                display: 'flex',
                gap: '1rem',
            }}>
                <Link href='/' style={{
                    backgroundColor: 'gray',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                }}>
                    Home Page
                </Link>
                <Link href='/ssg' style={{
                    backgroundColor: 'gray',
                    padding: '1rem',
                    borderRadius: '0.5rem',
                }}>
                    Back to SSG Page
                </Link>
            </nav>
            <p>
                {params.id}
            </p>
        </main>
    )
}
