import Image from "next/image"
import Layout from "@/components/Layout"
import { auth, HelloProvider } from "@hellocoop/nextjs"
import { UpdateProfileButton } from "@hellocoop/nextjs/react"
import { redirect } from "next/navigation"


const ProfileSection = ({children}) => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-4">
            {children}
        </div>
    )
}

export default async function ProfilePage(){
    const user = await auth()

    if(!user.isLoggedIn) 
        return redirect("/");
    
    return (
        <HelloProvider auth={user}>
            <Layout>
                <section className="flex flex-col items-start">
                    <h1 className="text-2xl font-medium">Your profile</h1>
                    <div className="bg-[#E8E8E8] dark:bg-[#303030] p-6 rounded-md w-full mt-4 text-left space-y-4">
                        <ProfileSection>
                            <h2 className="text-xl text-left">{user.name}</h2>
                        </ProfileSection>
                        <ProfileSection>
                            <Image src={user.picture} alt={user.name} width={96} height={96} className="rounded-full bg-[#cfcfcf] dark:bg-[#505050]" />
                        </ProfileSection>
                        <ProfileSection>
                            <h2 className="text-xl text-left">{user.email}</h2>
                        </ProfileSection>
                        {/* [ ō Update Profile with Hellō ] */}
                        <UpdateProfileButton theme="aware-static" />
                        {/* Default <UpdateProfileButton color="black" theme="ignore-light" hover="pop" />  */}
                    </div>
                </section>
            </Layout>
        </HelloProvider>
    )
}

// client retrieves auth

// 'use client'

// import { useRouter } from "next/navigation"
// import { useAuth } from "@hellocoop/nextjs/react"
// import Image from "next/image"
// import Layout from "@/components/Layout"
// import { UpdateProfileButton } from "@hellocoop/nextjs/react"

// const ProfileSection = ({children}) => {
//     return (
//         <div className="flex flex-wrap items-center justify-between gap-4">
//             {children}
//         </div>
//     )
// }

// export default function ProfilePage(){
//     const { replace } = useRouter()
//     const { isLoading, isLoggedIn, auth: user } = useAuth()

//     if(!isLoading && !isLoggedIn)
//         return replace("/")

//     return (
//         <Layout>
//             <section className="flex flex-col items-start">
//                 <h1 className="text-2xl font-medium">Your profile</h1>
//                 <div className="bg-[#E8E8E8] dark:bg-[#303030] p-6 rounded-md w-full mt-4 text-left space-y-4">
//                     <ProfileSection>
//                         <h2 className="text-xl text-left">{user.name}</h2>
//                     </ProfileSection>
//                     <ProfileSection>
//                         <Image src={user.picture} alt={user.name} width={96} height={96} className="rounded-full bg-[#cfcfcf] dark:bg-[#505050]" />
//                     </ProfileSection>
//                     <ProfileSection>
//                         <h2 className="text-xl text-left">{user.email}</h2>
//                     </ProfileSection>
//                     {/* [ ō Update Profile with Hellō ] */}
//                     <UpdateProfileButton theme="aware-static" />
//                     {/* Default <UpdateProfileButton color="black" theme="ignore-light" hover="pop" />  */}
//                 </div>
//             </section>
//         </Layout>
//     )
// }