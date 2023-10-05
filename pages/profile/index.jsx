import { HelloProvider, LoggedIn } from "@hellocoop/nextjs"
import Layout from "@/components/Layout"
import Profile from "@/components/Profile"

export default function ProfilePage({user}){
    return (
        <HelloProvider user={user}>
            <Layout>
                <LoggedIn>
                    <Profile/>
                </LoggedIn>
            </Layout>
        </HelloProvider>
    )
}
export { getServerSideProps } from "@hellocoop/nextjs"
