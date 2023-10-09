import Layout from "../components/Layout"
import Hero from "@/components/Hero"
import Prompt from "@/components/Prompt"
import Info from "@/components/Info"

// getServerSideProps - auth is available on page load

import { ContinueButton, LoggedIn, LoggedOut, HelloProvider } from "@hellocoop/nextjs"
export default function Home({auth}) {  
    return (
      <HelloProvider auth={auth}>
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
export { getServerSideProps } from "@hellocoop/nextjs"

// // client retrieves auth

// import { ContinueButton, LoggedIn, LoggedOut } from "@hellocoop/nextjs"
// export default function Home() {  
//     return (
//         <Layout>
//           <LoggedIn>
//               <Hero/>
//           </LoggedIn>
//           <LoggedOut>
//               <Prompt/>
//               {/* [ ō Continue with Hellō ] */}
//               <ContinueButton theme="aware-static" hover="flare" providerHint="google github gitlab" />
//               {/* Default <ContinueButton color="black" theme="ignore-light" hover="pop" />  */}
//           </LoggedOut>
//           <Info/>
//         </Layout>
//     )
// }
