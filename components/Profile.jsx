import Image from "next/image"
import { UpdateProfileButton, useAuth } from "@hellocoop/nextjs/react"

const ProfileSection = ({children}) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            {children}
        </div>
    )
}

export default function Profile() {
    const { auth: {name, email, picture} } = useAuth()

    console.log(123, auth)

    return (
        <section className="flex flex-col items-start">
            <h1 className="text-2xl font-medium">Your profile</h1>
            <div className="bg-[#E8E8E8] dark:bg-[#303030] p-6 rounded-md w-full mt-4 text-left space-y-4">
                <ProfileSection>
                    <h2 className="text-xl text-left">{name}</h2>
                </ProfileSection>
                <ProfileSection>
                    <Image src={picture} alt={name} width={96} height={96} className="rounded-full bg-[#cfcfcf] dark:bg-[#505050]" />
                </ProfileSection>
                <ProfileSection>
                    <h2 className="text-xl text-left">{email}</h2>
                </ProfileSection>
                {/* [ ō Update Profile with Hellō ] */}
                <UpdateProfileButton theme="aware-static" />
                {/* Default <UpdateProfileButton color="black" theme="ignore-light" hover="pop" />  */}
            </div>
        </section>
    )
}