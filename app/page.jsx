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