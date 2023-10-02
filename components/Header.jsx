'use client'

import Link from "next/link"
import Image from "next/image"
import { LoggedIn, logOutRoute } from "@hellocoop/nextjs"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="h-12 w-full bg-[#303030] flex-shrink-0 px-4">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between">
                <Link className="inline-flex items-center space-x-2" href="/">
                    {/* Use next/image */}
                    <Image src="hello.svg" alt="Hello" width={52} height={16}/>
                    <Image src="next.svg" alt="Next.js" width={82} height={16} className="pl-1"/>
                    <span className="text-lg -mb-0.5">Starter</span>
                </Link>

                <LoggedIn>
                    <nav className="flex items-center space-x-4">
                        {pathname !== "/profile" && <Link href="/profile">Profile</Link>}
                        <Link href={logOutRoute}>Log Out</Link>
                    </nav>
                </LoggedIn>
            </div>
        </header>
    )
}