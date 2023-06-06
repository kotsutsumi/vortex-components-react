// layout.tsx

import './globals.css'
import './primeone-light.css'
import 'vortex-deco/dist/vortex-deco.min.css'

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Vortex Components for React',
    description: ''
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}

// EOF
