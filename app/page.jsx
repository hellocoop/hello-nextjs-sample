'use client'

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

            <LoggedIn>
                <section className="relative h-64 bg-no-repeat bg-center bg-contain flex items-center justify-center text-2xl font-mono my-16">
                    Hellō to a new World<span className="blinker"></span>
                    <img src="world.png" className="absolute h-64 opacity-90"/>
                </section>
            </LoggedIn>

            <Divider/>
            <Description/>
            <LinkCards/>
        </>
    )
}