import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { LoggedIn, logOutRoute, useUser } from "@hellocoop/nextjs"
import { useRouter } from "next/router"

export default function Header() {
    const router = useRouter()
    const pathname = router.pathname
    const user = useUser()
    
    const [ menu, setMenu ] = useState(false)

    useEffect(() => {
        //Close dropdown on route change
        return () => setMenu(false)
    }, [pathname])

    return (
        <header className="h-12 w-full bg-[#303030] flex-shrink-0 px-4">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between">
                <Link href="/">
                    <span className="inline-flex items-center space-x-2">
                        <img src="/hello.svg" alt="Hello" className="h-4" />
                        <img src="/next.svg" alt="Next.js" className="h-4 pl-1"/>
                        <span className="text-2xl -mt-0.5 italic text-[#d4d4d4]">Starter</span>
                    </span>
                </Link>

                <LoggedIn>
                    <div className="flex justify-end relative">
                        <button onClick={()=>setMenu(!menu)} className="flex items-center space-x-2 text-[#d4d4d4] hover:bg-[#505050] py-1 px-2 rounded-md">
                            {/* Use next/image */}
                            <img src={user?.picture} alt={user?.name} className="rounded-full h-7" />
                            <span className="hidden md:block">{user?.email}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-4 ${menu ? "rotate-180" : ""}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {menu && (
                            <>
                                <nav className="absolute top-10 bg-[#303030] px-6 py-2 flex flex-col items-end md:w-3/4 z-20 text-[#d4d4d4]">
                                    <span className="md:hidden opacity-60 py-2">{user?.email}</span>
                                    {pathname !== "/profile" && <Link href="/profile" className="py-2 hover:underline">Profile</Link>}
                                    <Link href={logOutRoute} className="py-2 hover:underline">Log Out</Link>
                                </nav>
                                <span onClick={()=>setMenu(false)} className="h-screen w-screen left-0 fixed z-10 top-12 bg-black bg-opacity-80"></span>
                            </>
                        )}
                    </div>
                </LoggedIn>
            </div>
        </header>
    )
}