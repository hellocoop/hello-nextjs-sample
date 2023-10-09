import { HelloProvider, LoggedIn } from "@hellocoop/nextjs"
import Layout from "@/components/Layout"
import Profile from "@/components/Profile"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ProfilePage({auth}){
    const { replace } = useRouter()

    useEffect(() => {
        if(!auth?.isLoggedIn)
            return replace("/")
    }, [])

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
