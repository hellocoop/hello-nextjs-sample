import { auth } from "@hellocoop/nextjs";
import { ContinueButton, HelloProvider, LoggedIn, LoggedOut } from "@hellocoop/nextjs/react";
import Hero from "@/components/Hero";
import Prompt from "@/components/Prompt";
import Info from "@/components/Info";
import Layout from "@/components/Layout";

export default async function HomePage() {
  const user = await auth();
  return (
    <HelloProvider auth={user}>
      <Layout>
        <LoggedIn>
          <Hero/>
        </LoggedIn>
        <LoggedOut>
          <Prompt/>
          {/* [ ō Continue with Hellō ] */}
          <ContinueButton theme="aware-static" hover="flare" providerHint={['google','github','gitlab']} />
          {/* Default <ContinueButton color="black" theme="ignore-light" hover="pop" />  */}
        </LoggedOut>
        <Info/>
      </Layout>
    </HelloProvider>
  );
}
