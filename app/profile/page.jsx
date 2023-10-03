'use client'

import { useUser, UpdateEmailButton, UpdatePictureButton, LoggedIn } from "@/hellocoop-nextjs"
import ProfileContainer from "@/components/ProfileContainer"
import ProfileSection from "@/components/ProfileSection"

export default function Profile(){
    const user = useUser()
    return (
        <LoggedIn>
            <ProfileContainer heading="Your Profile">
                <ProfileSection>
                    <h2 className="text-xl text-left">{user?.name}</h2>
                </ProfileSection>
                
                <ProfileSection>
                    {/* Use next/image */}
                    <img src={user?.picture} alt={user?.name} className="h-24 rounded-full bg-gray-700" />
                    {/* Update Pictutre with Hellō button */}
                    <UpdatePictureButton/> 
                </ProfileSection>

                <ProfileSection>
                    <h2 className="text-xl text-left">{user?.email}</h2>
                    {/* Update Email with Hellō button */}
                    <UpdateEmailButton/> 
                </ProfileSection>
            </ProfileContainer>
        </LoggedIn>
    )
}