import { ContinueButton, LoggedIn, LoggedOut, HelloProvider } from "@hellocoop/nextjs"
import Layout from "@/components/Layout"
import Hero from "@/components/Hero"
import Prompt from "@/components/Prompt"
import Info from "@/components/Info"

export default function Home() {
  return (
    <HelloProvider>
      <Layout>
        <LoggedIn>
            <Hero/>
        </LoggedIn>
        <LoggedOut>
            <Prompt/>
            {/* [ ō Continue with Hellō ] */}
            <ContinueButton theme="aware-static" hover="flare" providerHint="google github gitlab" />
            {/* Default <ContinueButton color="black" theme="ignore-light" hover="pop" />  */}
        </LoggedOut>
        <Info/>
      </Layout>
    </HelloProvider>
  )
}
