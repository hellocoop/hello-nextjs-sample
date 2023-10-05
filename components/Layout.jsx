import Link from "next/link"
import { getUser } from '@/hellocoop-nextjs'
import { useEffect, useState } from "react"
import { LoggedIn, logOutRoute } from "@/hellocoop-nextjs"
import { useRouter } from "next/router"

export default function Layout({user,children}) {
    const u = getUser(user)
    return (
        <>
            <Header email={u?.email} name={u?.name} picture={u?.picture}/>
                <main className="py-10 px-4 text-center flex-1 overflow-auto">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                </main>
            <Footer/>
        </>
    )
}

const Header = ({name, email, picture}) => {
    const router = useRouter()
    const pathname = router.pathname
    const isCSRPage = router.pathname.startsWith("/csr")
    
    const [ menu, setMenu ] = useState(false)

    useEffect(() => {
        //Close dropdown on route change
        return () => setMenu(false)
    }, [pathname])

    return (
        <header className="h-12 w-full bg-charcoal flex-shrink-0 px-4">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between">
                <Link href={isCSRPage ? "/csr" : "/"}>
                    <span className="inline-flex items-center space-x-2">
                        <img src="/hello.svg" alt="Hello" className="h-4" />
                        <img src="/next.svg" alt="Next.js" className="h-4 pl-1"/>
                        <span className="text-2xl -mt-0.5 italic text-gray">Starter</span>
                    </span>
                </Link>

                <LoggedIn>
                    <div className="flex justify-end relative">
                        <button onClick={()=>setMenu(!menu)} className="flex items-center space-x-2 text-gray hover:bg-[#505050] py-1 px-2 rounded-md">
                            {/* Use next/image */}
                            <img src={picture} alt={name} className="rounded-full h-7" />
                            <span className="hidden md:block">{email}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className={`h-4 ${menu ? "rotate-180" : ""}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {menu && (
                            <>
                                <nav className="absolute top-10 bg-charcoal px-6 py-2 flex flex-col items-end md:w-3/4 z-40 text-gray">
                                    <span className="md:hidden opacity-60 py-2">{email}</span>
                                    {!["/csr/profile", "/profile"].includes(pathname) && <Link href={isCSRPage ? "/csr/profile" : "/profile"} className="py-2 hover:underline">Profile</Link>}
                                    <Link href={isCSRPage ? `${logOutRoute}&target_uri=/csr` : logOutRoute} className="py-2 hover:underline">Log Out</Link>
                                </nav>
                                <span onClick={()=>setMenu(false)} className="h-screen w-screen left-0 fixed z-30 top-12 bg-black bg-opacity-80"></span>
                            </>
                        )}
                    </div>
                </LoggedIn>
            </div>
        </header>
    )
}

const Footer = () => {
    return (
        <footer className="h-12 w-full bg-charcoal flex items-center justify-center space-x-4 text-sm text-gray">
            <Link href="https://www.hello.coop/terms-of-service.html" className="hover:underline">Terms of Service</Link>
            <Link href="https://www.hello.coop/privacy-policy.html" className="hover:underline">Privacy Policy</Link>
        </footer>
    )
}