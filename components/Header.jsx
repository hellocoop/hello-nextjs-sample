'use client'

import Link from "next/link"
import { LoggedIn, logOutRoute } from "@hellocoop/nextjs"
import { usePathname } from "next/navigation"

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="h-12 w-full bg-[#303030] flex-shrink-0 px-4">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between">
                <Link className="inline-flex items-center space-x-2" href="/">
                    {/* Use next/image */}
                    <img src="hello.svg" className="h-4" />
                    <img src="next.svg" className="h-4 pl-1" />
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