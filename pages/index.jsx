import Hero from "@/components/Hero"
import Divider from "@/components/Divider"
import Description from "@/components/Description"
import LinkCards from "@/components/LinkCards"
import { ContinueButton, LoggedOut } from "@hellocoop/nextjs"
import Layout from "../components/Layout"

export default function Home() {
    return (
        <Layout>
            <Hero/>
            
            <LoggedOut>
                {/* Continue with Hellō button */}
                <ContinueButton/> 
            </LoggedOut>

            <Divider/>
            <Description/>
            <LinkCards/>
        </Layout>
    )
}