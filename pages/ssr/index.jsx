
import { LoggedOut,ContinueButton, HelloProvider } from "@/hellocoop-nextjs"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Description from "@/components/Description"
import LinkCards from "@/components/LinkCards"

export default function sspHome({user}) {

  // console.log('ssrPage:props',JSON.stringify(props,null,4))

  return (
    <HelloProvider user={user}>
      <Layout name={user?.name} email={user?.email} picture={user?.picture}>
        <Hero isLoggedIn={user?.isLoggedIn} name={user?.name} />

        <LoggedOut>
            {/* Continue with Hellō button */}
            <ContinueButton targetURI="/ssr" /> 
        </LoggedOut>

        <Description/>
        <LinkCards/>
      </Layout>
    </HelloProvider>
  )
}

export { getServerSideProps } from "@/hellocoop-nextjs"
