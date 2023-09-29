'use client'

import Hero from "@/components/Hero"
import Divider from "@/components/Divider"
import Description from "@/components/Description"
import ExamplesTable from "@/components/ExamplesTable"
import LinkCards from "@/components/LinkCards"
import { ContinueButton, LoggedIn, LoggedOut, UpdateEmailButton, UpdatePictureButton, useUser } from "@hellocoop/nextjs"

export default function Home() {
    const user = useUser()
    return (
        <>
            <Hero/>
            
            <LoggedOut>
                {/* Continue with Hellō button */}
                <ContinueButton/> 
            </LoggedOut>
            <LoggedIn>
                <p className="bg-green-900 p-6 h-64 inline-flex items-center justify-center">
                    TBD: Value Proposition Here / What just happened after Login with Hellō
                </p>
            </LoggedIn>

            <Divider/>
            <Description/>
            <ExamplesTable/>
            <LinkCards/>
        </>
    )
}