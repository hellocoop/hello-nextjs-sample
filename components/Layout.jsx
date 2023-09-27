import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
    return (
        <>
            <Header/>
            <main className="max-w-3xl mx-auto p-6 text-center">
                {children}
            </main>
            <Footer/>
        </>
    )
}