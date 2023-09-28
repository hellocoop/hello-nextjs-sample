'use client'

import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Divider from "@/components/Divider"
import Description from "@/components/Description"
import ExamplesTable from "@/components/ExamplesTable"
import LinkCards from "@/components/LinkCards"
import Profile from "@/components/Profile"
import ProfileSection from "@/components/ProfileSection"
import { ContinueButton, LoggedIn, LoggedOut, UpdateEmailButton, UpdatePictureButton, useUser } from "@hellocoop/nextjs"

export default function Home() {
    const user = useUser()
    return (
        <Layout> {/* Has Header and Footer */}
            <LoggedOut> 
                <Hero/>
                
                {/* Continue with Hellō button */}
                <ContinueButton targetURI="/" providerHint="facebook --google" /> 

                <Divider/>
                <Description/>
                <ExamplesTable/>
                <LinkCards/>
            </LoggedOut>

            <LoggedIn>
                <Profile heading="Your Profile">
                    <ProfileSection>
                        <h2 className="text-xl text-left">{user?.name}</h2>
                    </ProfileSection>
                    
                    <ProfileSection>
                        {/* Use next/image */}
                        <img src={user?.picture} className="h-24 rounded-full bg-gray-700" />
                        {/* Update Pictutre with Hellō button */}
                        <UpdatePictureButton targetURI="/" providerHint="github --google"/> 
                    </ProfileSection>

                    <ProfileSection>
                        <h2 className="text-xl text-left">{user?.email}</h2>
                        {/* Update Email with Hellō button */}
                        <UpdateEmailButton targetURI="/" providerHint="microsoft --facebook"/> 
                    </ProfileSection>
                </Profile>
            </LoggedIn>
        </Layout>
    )
}