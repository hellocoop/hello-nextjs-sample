import Link from "next/link"
import { LoggedIn, logOutRoute } from "@hellocoop/nextjs"

export default function Header() {
    return (
        <header className="h-12 w-full bg-[#303030] flex-shrink-0 px-4">
            <div className="max-w-3xl h-full mx-auto flex items-center justify-between">
                {/* Use next/image */}
                <div className="inline-flex items-center space-x-3">
                    <img src="hello.svg" className="h-4" />
                    <img src="next.svg" className="h-4" />
                </div>

                <LoggedIn>
                    <Link href={logOutRoute}>Log Out</Link>
                </LoggedIn>
            </div>
        </header>
    )
}