'use client'

import Image from "next/image"
import Hero from "@/components/Hero"
import Divider from "@/components/Divider"
import Description from "@/components/Description"
import LinkCards from "@/components/LinkCards"
import { ContinueButton, LoggedIn, LoggedOut } from "@hellocoop/nextjs"

export default function Home() {
    return (
        <>
            <Hero/>
            
            <LoggedOut>
                {/* Continue with Hellō button */}
                <ContinueButton/> 
            </LoggedOut>

            <Divider/>
            <Description/>
            <LinkCards/>
        </>
    )
}