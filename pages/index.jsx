import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Divider from "@/components/Divider"
import Description from "@/components/Description"
import ExamplesTable from "@/components/ExamplesTable"
import LinkCards from "@/components/LinkCards"
import Profile from "@/components/Profile"
import ProfileSection from "@/components/ProfileSection"
import { ContinueButton, LoggedIn, LoggedOut, UpdateEmailButton, UpdatePictureButton } from "@hellocoop/nextjs"

export default function Home() {
    // const user = useUser()
    const user = {
        picture: "https://avatars.githubusercontent.com/u/15141246?v=4",
        name: "John Smith",
        email: "johnsmith@example.com"
    }
    return (
        <Layout> {/* Has Header and Footer */}
            <LoggedOut> 
                <Hero/>
                
                {/* Continue with Hellō button */}
                {/* <ContinueButton/>  */}

                <Divider/>
                <Description/>
                <ExamplesTable/>
                <LinkCards/>
            </LoggedOut>

            <LoggedIn>
                <Profile heading="Your Profile">
                    <ProfileSection>
                        <h2 className="text-lg text-left">{user.name}</h2>
                    </ProfileSection>
                    
                    <ProfileSection>
                        {/* Use next/image */}
                        <img src={user.picture} className="h-24 rounded-full bg-gray-700" />
                        {/* Update Pictutre with Hellō button */}
                        {/* <UpdatePictureButton/>  */}
                    </ProfileSection>

                    <ProfileSection>
                        <h2 className="text-lg text-left">{user.email}</h2>
                        {/* Update Email with Hellō button */}
                        {/* <UpdateEmailButton/>  */}
                    </ProfileSection>
                </Profile>
            </LoggedIn>
        </Layout>
    )
}