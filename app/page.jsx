'use client'

import Hero from "@/components/Hero"
import Divider from "@/components/Divider"
import Description from "@/components/Description"
import ExamplesTable from "@/components/ExamplesTable"
import LinkCards from "@/components/LinkCards"
import { ContinueButton, LoggedIn, LoggedOut, useUser } from "@hellocoop/nextjs"
import { useEffect } from "react"
import { getConsoleURI } from "../lib/utils.js"
import { useRouter } from "next/navigation"

export default function Home() {
    const { replace } = useRouter()
    useEffect(() => {
        if(getConsoleURI())
            return replace('/console' + window.location.search)
    }, [])

    const user = useUser()
    return (
        <>
            <Hero/>
            
            <LoggedOut>
                {/* Continue with Hellō button */}
                <ContinueButton/> 
            </LoggedOut>

            <LoggedIn>
                    Hellō to a new World
            </LoggedIn>

            <Divider/>
            <Description/>
            <ExamplesTable/>
            <LinkCards/>
        </>
    )
}