import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main>
            <Image
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            /> 
        </main>
    )
}
