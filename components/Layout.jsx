import Header from "./Header"
import Footer from "./Footer"

export default function Layout({children, email, name, picture}) {
    return (
        <>
            <Header email={email} name={name} picture={picture}/>
                <main className="py-10 px-4 text-center flex-1 overflow-auto">
                    <div className="max-w-4xl mx-auto">
                        {children}
                    </div>
                </main>
            <Footer/>
        </>
    )
}