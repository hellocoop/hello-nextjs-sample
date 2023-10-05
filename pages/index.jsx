import { ContinueButton, LoggedOut, useUser, HelloProvider } from "@/hellocoop-nextjs"
import Layout from "../components/Layout"
import Hero from "@/components/Hero"
import Content from "@/components/Content"

export default function Home() {
    const user = useUser()
    return (
        <HelloProvider user={user}>
            <Layout name={user?.name} email={user?.email} picture={user?.picture}>
                <Hero isLoggedIn={user?.isLoggedIn} name={user?.name}/>
                    
                <LoggedOut>
                    {/* Continue with Hellō button */}
                    <ContinueButton/> 
                </LoggedOut>

                <Content/>
            </Layout>
        </HelloProvider>
    )
}