import { LoggedIn, HelloProvider } from "@hellocoop/nextjs"
import Layout from "@/components/Layout"
import Profile from "@/components/Profile"

export default function sspProfile(){
    return (
        <HelloProvider>
            <Layout>
                <LoggedIn>
                    <Profile/>
                </LoggedIn>
            </Layout>
        </HelloProvider>
    )
}
