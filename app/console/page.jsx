'use client'

import React, { useState, useEffect } from "react"
import { getConsoleURI } from "../../lib/utils.js"
import Link from "next/link"
import { LoggedIn } from "@hellocoop/nextjs"
import { useRouter } from "next/navigation"

export default function Console() {
    const [consoleURI, setConsoleURI] = useState("")
    const { replace } = useRouter()

    useEffect(() => {
        const _consoleURI = getConsoleURI()
        if(!_consoleURI) 
            return replace('/')
        
        setConsoleURI(_consoleURI)
    }, [])

    return (
        <LoggedIn>
            <Link href={consoleURI} target="_blank">
                Click me to add x redirect URI to your app in the Hellō Developer Console
            </Link>
        </LoggedIn>
    )
}