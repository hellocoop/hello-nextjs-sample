import { ContinueButton, LoggedIn, LoggedOut, HelloProvider } from "@/hellocoop-nextjs"
import Layout from "../components/Layout"
import Hero from "@/components/Hero"
import Prompt from "@/components/Prompt"
import Info from "@/components/Info"

export default function Home({user}) {  
    return (
      <HelloProvider user={user}>
        <Layout>
          <LoggedIn>
              <Hero/>
          </LoggedIn>
          <LoggedOut>
              <Prompt/>
              {/* [ ō Continue with Hellō ] */}
              <ContinueButton/> 
          </LoggedOut>
          <Info/>
        </Layout>
      </HelloProvider>
    )
  }
  
  export { getServerSideProps } from "@/hellocoop-nextjs"
  