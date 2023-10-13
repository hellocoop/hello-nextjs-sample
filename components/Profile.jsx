// import Image from "next/image"
import { UpdatePictureButton, UpdateEmailButton, useAuth } from "@hellocoop/nextjs"


const ProfileSection = ({children}) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            {children}
        </div>
    )
}

export default function Profile() {
    const { auth: {name, email, picture} } = useAuth()

    return (
        <section className="flex flex-col items-start">
            <h1 className="text-2xl font-medium">Your profile</h1>
            <div className="bg-[#E8E8E8] dark:bg-charcoal p-6 rounded-md w-full mt-4 text-left space-y-4">
                <ProfileSection>
                    <h2 className="text-xl text-left">{name}</h2>
                </ProfileSection>
                <ProfileSection>
                    {/* <Image src={picture} alt={name} width={96} height={96} className="rounded-full bg-[#cfcfcf] dark:bg-[#505050]" /> */}
                    <img src={picture} alt={name} width={96} height={96} className="rounded-full bg-[#cfcfcf] dark:bg-[#505050]" />
                    {/* [ ō Update Picture with Hellō ] */}
                    <UpdatePictureButton theme="aware-static" />
                    {/* Default <UpdatePictureButton color="black" theme="ignore-light" hover="pop" />  */}
                </ProfileSection>
                <ProfileSection>
                    <h2 className="text-xl text-left">{email}</h2>
                    {/* [ ō Update Email with Hellō ] */}
                    <UpdateEmailButton theme="aware-static" />
                    {/* Default <UpdateEmailButton color="black" theme="ignore-light" hover="pop" />  */}
                </ProfileSection>
            </div>
        </section>
    )
}