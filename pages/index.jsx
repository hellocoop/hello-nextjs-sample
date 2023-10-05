import Hero from "@/components/Hero"
import Description from "@/components/Description"
import LinkCards from "@/components/LinkCards"
import { ContinueButton, LoggedOut, useUser, HelloProvider } from "@/hellocoop-nextjs"
import Layout from "../components/Layout"

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

                <Description/>
                <LinkCards/>
            </Layout>
        </HelloProvider>
    )
}