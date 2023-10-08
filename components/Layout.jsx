import Link from "next/link"
import { getAuth, LoggedIn, logOutRoute } from '@hellocoop/nextjs'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

export default function Layout({auth,children}) {
    const u = getAuth(auth)
    const router = useRouter()
    const pathname = router.pathname
    const isCSFPage = router.pathname.startsWith("/csf")
    const isProfile = pathname.endsWith("profile")
    const otherVersion = isCSFPage 
        ? (isProfile ? "/profile" : "/")
        : (isProfile ? "/csf/profile" : "/csf")

    return (
        <>
            <Header auth={u} isCSFPage={isCSFPage} pathname={pathname}/>
                <main className="py-10 px-4 text-center flex-1 overflow-auto">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                    <span className="block text-center mt-6">
                        <Link href={otherVersion} className="hover:underline">
                            Switch to {isCSFPage ? "Server Side Props" : "Client Side Fetch"} Version
                        </Link>
                    </span>
                </main>
            <Footer/>
        </>
    )
}

const Header = ({auth, isCSFPage, pathname}) => {
    const { name, email, picture } = auth || {}
    const [ menu, setMenu ] = useState(false)

    useEffect(() => {
        //Close dropdown on route change
        return () => setMenu(false)
    }, [pathname])

    return (
        <header className="h-12 w-full bg-charcoal flex-shrink-0 px-4">
            <div className="max-w-4xl h-full mx-auto flex items-center justify-between">
                <Link href={isCSFPage ? "/csf" : "/"}>
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
                                    {!["/csf/profile", "/profile"].includes(pathname) && <Link href={isCSFPage ? "/csf/profile" : "/profile"} className="py-2 hover:underline">Profile</Link>}
                                    <Link href={isCSFPage ? `${logOutRoute}&target_uri=/csf` : logOutRoute} className="py-2 hover:underline">Log Out</Link>
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