import { Inter } from '@next/font/google'
import styles from '../page.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })
export default function SSGPage() {
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
            </nav>
            <Link href='/ssg/ssg_prefix_1' style={{
                backgroundColor: 'gray',
                padding: '1rem',
                borderRadius: '0.5rem',
            }}>
                id: 1
            </Link>
            <Link href='/ssg/ssg_prefix_2' style={{
                backgroundColor: 'gray',
                padding: '1rem',
                borderRadius: '0.5rem',
            }}>
                id: 2
            </Link>
            <Link href='/ssg/ssg_prefix_3' style={{
                backgroundColor: 'gray',
                padding: '1rem',
                borderRadius: '0.5rem',
            }}>
                id: 3
            </Link>
        </main>
    )
}
