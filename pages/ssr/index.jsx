
import { LoggedOut, LoggedIn, ContinueButton, HelloProvider } from "@/hellocoop-nextjs"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import Content from "@/components/Content"

export default function sspHome({user}) {

  // console.log('ssrPage:props',JSON.stringify(user,null,4))

  return (
    <HelloProvider user={user}>
      <Layout>
        <LoggedIn>
            <Hero/>
        </LoggedIn>
        <LoggedOut>
            <Prompt/>
            {/* Continue with Hellō button */}
            <ContinueButton targetURI="/ssr" /> 
        </LoggedOut>
        <StarterInfo/>
      </Layout>
    </HelloProvider>
  )
}

export { getServerSideProps } from "@/hellocoop-nextjs"
