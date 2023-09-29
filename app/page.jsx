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
                <p className="bg-green-800 p-6 inline-block">
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