// page.tsx

'use client'

import { C1, C2 } from '@/app/_components/Caption'
import CardContainer, {
    BlueContainer,
    BlueGrayContainer,
    CyanContainer,
    GrayContainer,
    GreenContainer,
    IndigoContainer,
    OrangeContainer,
    PinkContainer,
    PrimaryContainer,
    PurpleContainer,
    RedContainer,
    SurfaceContainer,
    TealContainer,
    WhiteContainer,
    YellowContainer
} from '../_components/CardContainer'

export default function CardContainerPage() {
    return (
        <main className="p-4">
            <C1 className="mb-8">Card Container</C1>

            <div>
                <div className="mb-4">
                    <C2>Card Container</C2>
                    <CardContainer>Card Container</CardContainer>
                </div>

                <div className="mb-4">
                    <C2>Primary Container</C2>
                    <PrimaryContainer>PrimaryContainer</PrimaryContainer>
                </div>

                <div className="mb-4">
                    <C2>Surface Container</C2>
                    <SurfaceContainer>Surface Container</SurfaceContainer>
                </div>

                <div className="mb-4">
                    <C2>White Container</C2>
                    <WhiteContainer>White Container</WhiteContainer>
                </div>

                <div className="mb-4">
                    <C2>Blue Container</C2>
                    <BlueContainer>Blue Container</BlueContainer>
                </div>

                <div className="mb-4">
                    <C2>Green Container</C2>
                    <GreenContainer>Green Container</GreenContainer>
                </div>

                <div className="mb-4">
                    <C2>Yellow Container</C2>
                    <YellowContainer>Yellow Container</YellowContainer>
                </div>

                <div className="mb-4">
                    <C2>Cyan Container</C2>
                    <CyanContainer>Cyan Container</CyanContainer>
                </div>

                <div className="mb-4">
                    <C2>Pink Container</C2>
                    <PinkContainer>Pink Container</PinkContainer>
                </div>

                <div className="mb-4">
                    <C2>Indigo Container</C2>
                    <IndigoContainer>Indigo Container</IndigoContainer>
                </div>

                <div className="mb-4">
                    <C2>Teal Container</C2>
                    <TealContainer>Teal Container</TealContainer>
                </div>

                <div className="mb-4">
                    <C2>Orange Container</C2>
                    <OrangeContainer>Orange Container</OrangeContainer>
                </div>

                <div className="mb-4">
                    <C2>BlueGray Container</C2>
                    <BlueGrayContainer>BlueGray Container</BlueGrayContainer>
                </div>

                <div className="mb-4">
                    <C2>Purple Container</C2>
                    <PurpleContainer>Purple Container</PurpleContainer>
                </div>

                <div className="mb-4">
                    <C2>Gray Container</C2>
                    <GrayContainer>Gray Container</GrayContainer>
                </div>

                <div className="mb-4">
                    <C2>Red Container</C2>
                    <RedContainer>Red Container</RedContainer>
                </div>
            </div>
        </main>
    )
}

// EOF
