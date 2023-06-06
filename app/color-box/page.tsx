// page.tsx

'use client'

import { C1, C2 } from '@/app/_components/Caption'
import {
    BlueBox,
    BlueGrayBox,
    CyanBox,
    GrayBox,
    GreenBox,
    IndigoBox,
    OrangeBox,
    PinkBox,
    PrimaryBox,
    PurpleBox,
    RedBox,
    SurfaceBox,
    TealBox,
    WhiteBox,
    YellowBox
} from '@/app/_components/ColorBox'

export default function ColorBoxPage() {
    return (
        <main className="p-4">
            <C1 className="mb-8">Color Box</C1>

            <div>
                <div className="mb-4">
                    <C2>Primary</C2>
                    <PrimaryBox className="w-4rem h-4rem p-4 m-2">1</PrimaryBox>
                </div>
                <div className="mb-4">
                    <C2>Surface</C2>
                    <SurfaceBox className="w-4rem h-4rem p-4 m-2">1</SurfaceBox>
                </div>
                <div className="mb-4">
                    <C2>White</C2>
                    <WhiteBox className="w-4rem h-4rem p-4 m-2">1</WhiteBox>
                </div>
                <div className="mb-4">
                    <C2>Blue</C2>
                    <BlueBox className="w-4rem h-4rem p-4 m-2">1</BlueBox>
                </div>
                <div className="mb-4">
                    <C2>BlueGray</C2>
                    <BlueGrayBox className="w-4rem h-4rem p-4 m-2">
                        1
                    </BlueGrayBox>
                </div>
                <div className="mb-4">
                    <C2>Cyan</C2>
                    <CyanBox className="w-4rem h-4rem p-4 m-2">1</CyanBox>
                </div>
                <div className="mb-4">
                    <C2>Gray</C2>
                    <GrayBox className="w-4rem h-4rem p-4 m-2">1</GrayBox>
                </div>
                <div className="mb-4">
                    <C2>Green</C2>
                    <GreenBox className="w-4rem h-4rem p-4 m-2">1</GreenBox>
                </div>
                <div className="mb-4">
                    <C2>Indigo</C2>
                    <IndigoBox className="w-4rem h-4rem p-4 m-2">1</IndigoBox>
                </div>
                <div className="mb-4">
                    <C2>Orange</C2>
                    <OrangeBox className="w-4rem h-4rem p-4 m-2">1</OrangeBox>
                </div>
                <div className="mb-4">
                    <C2>Pink</C2>
                    <PinkBox className="w-4rem h-4rem p-4 m-2">1</PinkBox>
                </div>
                <div className="mb-4">
                    <C2>Purple</C2>
                    <PurpleBox className="w-4rem h-4rem p-4 m-2">1</PurpleBox>
                </div>
                <div className="mb-4">
                    <C2>Red</C2>
                    <RedBox className="w-4rem h-4rem p-4 m-2">1</RedBox>
                </div>
                <div className="mb-4">
                    <C2>Teal</C2>
                    <TealBox className="w-4rem h-4rem p-4 m-2">1</TealBox>
                </div>
                <div className="mb-4">
                    <C2>Yellow</C2>
                    <YellowBox className="w-4rem h-4rem p-4 m-2">1</YellowBox>
                </div>
            </div>
        </main>
    )
}

// EOF
