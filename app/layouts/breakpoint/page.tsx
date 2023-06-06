// page.tsx

'use client'

import { C1 } from '@/app/_components/Caption'
import Breakpoint, { Responsive } from '@/app/_components/layouts/Breakpoint'

export default function BreakpointPage() {
    return (
        <main className="p-4">
            <C1>Breakpoint</C1>
            <div>
                <Breakpoint type={Responsive.sm}>
                    <div>small screens e.g. phones</div>
                </Breakpoint>

                <Breakpoint type={Responsive.md}>
                    <div>medium screens e.g. tablets</div>
                </Breakpoint>

                <Breakpoint type={Responsive.lg}>
                    <div>large screens e.g. notebooks</div>
                </Breakpoint>

                <Breakpoint type={Responsive.xl}>
                    <div>larger screens e.g monitors</div>
                </Breakpoint>
            </div>
        </main>
    )
}

// EOF
