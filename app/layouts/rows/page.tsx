// page.tsx

'use client'

import { C1, C2 } from '@/app/_components/Caption'
import { BlueContainer } from '@/app/_components/CardContainer'
import { BlueBox } from '@/app/_components/ColorBox'
import Rows, { BoxAlign, Row } from '@/app/_components/layouts/Rows'

export default function RowsPage() {
    return (
        <main className="p-4">
            <C1 className="mb-4">Rows</C1>

            <div className="mb-4">
                <C2>Items are displayed horizontally</C2>

                <BlueContainer>
                    <Rows>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2">
                                1
                            </BlueBox>
                        </Row>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2">
                                2
                            </BlueBox>
                        </Row>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2 ">
                                3
                            </BlueBox>
                        </Row>
                    </Rows>
                </BlueContainer>
            </div>

            <div>
                <C2>Items are displayed horizontally to Center</C2>

                <BlueContainer>
                    <Rows align={BoxAlign.center}>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2">
                                1
                            </BlueBox>
                        </Row>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2">
                                2
                            </BlueBox>
                        </Row>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2 ">
                                3
                            </BlueBox>
                        </Row>
                    </Rows>
                </BlueContainer>
            </div>

            <div>
                <C2>Items are displayed horizontally to Right</C2>

                <BlueContainer>
                    <Rows align={BoxAlign.right}>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2">
                                1
                            </BlueBox>
                        </Row>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2">
                                2
                            </BlueBox>
                        </Row>
                        <Row>
                            <BlueBox className="w-4rem h-4rem p-4 m-2 ">
                                3
                            </BlueBox>
                        </Row>
                    </Rows>
                </BlueContainer>
            </div>
        </main>
    )
}

// EOF
