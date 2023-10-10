import Layout from "@/components/Layout"
import Profile from "@/components/Profile"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

// getServerSideProps - auth is available on page load

import { HelloProvider, LoggedIn, useAuth } from "@hellocoop/nextjs"

export default function ProfilePage({auth}){
    const { replace } = useRouter()
    const { isLoading, isLoggedIn } = useAuth()

    useEffect(() => {
        if(!isLoading && !isLoggedIn)
            return replace("/")
    })

    return (
        <HelloProvider auth={auth}>
            <Layout>
                <LoggedIn>
                    <Profile/>
                </LoggedIn>
            </Layout>
        </HelloProvider>
    )
}
export { getServerSideProps } from "@hellocoop/nextjs"

// // client retrieves auth

// import { LoggedIn, useAuth } from "@hellocoop/nextjs"

// export default function ProfilePage(){
//     const { replace } = useRouter()
//     const { isLoading, isLoggedIn } = useAuth()

//     if(!isLoading && !isLoggedIn)
//         return replace("/")

//     return (
//         <Layout>
//             <LoggedIn>
//                 <Profile/>
//             </LoggedIn>
//         </Layout>
//     )
// }
