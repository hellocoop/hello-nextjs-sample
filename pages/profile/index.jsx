import { useUser, HelloProvider, LoggedIn } from "@/hellocoop-nextjs"
import Layout from "@/components/Layout"
import ProfileContainer from "@/components/ProfileContainer"

export default function Profile(){
    const user = useUser()
    return (
        <HelloProvider user={user}>
            <Layout name={user?.name} email={user?.email} picture={user?.picture}>
                <LoggedIn>
                    <ProfileContainer heading="Your Profile"
                        name={user?.name}
                        picture={user?.picture}
                        email={user?.email}
                    />
                </LoggedIn>
            </Layout>
        </HelloProvider>
    )
}