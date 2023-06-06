// page.tsx

'use client'

import Link from 'next/link'
import { C1, C2 } from '@/app/_components/Caption'

export default function IndexPage() {
    return (
        <main className="p-4">
            <C1 className="mb-8">Vortex Components for React</C1>

            <ul>
                <li>
                    <Link href="./caption">Caption</Link>{' '}
                </li>
                <li>
                    <Link href="./card-container">CardContainer</Link>{' '}
                </li>
                <li>
                    <Link href="./color-box">ColorBox</Link>{' '}
                </li>
                <li>
                    <Link href="./dictionary">Dictionary</Link>{' '}
                </li>
                <li>
                    <C2 className="mb-4 mt-8">Layouts</C2>
                    <ul>
                        <li>
                            <Link href="./layouts/breakpoint">Breakpoint</Link>{' '}
                        </li>
                        <li>
                            <Link href="./layouts/form">Form</Link>{' '}
                        </li>
                        <li>
                            <Link href="./layouts/grid">Grid</Link>{' '}
                        </li>
                        <li>
                            <Link href="./layouts/rows">Rows</Link>{' '}
                        </li>
                        <li>
                            <Link href="./layouts/cols">Cols</Link>{' '}
                        </li>
                    </ul>
                </li>
            </ul>
        </main>
    )
}

// EOF
