import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <main className="py-10 px-4 text-center flex-1 overflow-auto">
                <div className="max-w-3xl mx-auto">
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}