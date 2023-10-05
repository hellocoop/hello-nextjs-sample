
import { LoggedOut,ContinueButton, HelloProvider } from "@/hellocoop-nextjs"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Content from "@/components/Content"

export default function sspHome({user}) {

  // console.log('ssrPage:props',JSON.stringify(user,null,4))

  return (
    <HelloProvider user={user}>
      <Layout name={user?.name} email={user?.email} picture={user?.picture}>
        <Hero isLoggedIn={user?.isLoggedIn} name={user?.name} />

        <LoggedOut>
            {/* Continue with Hellō button */}
            <ContinueButton targetURI="/ssr" /> 
        </LoggedOut>

        <Content/>
      </Layout>
    </HelloProvider>
  )
}

export { getServerSideProps } from "@/hellocoop-nextjs"
