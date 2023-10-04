
import { getServerSideProps, LoggedIn, LoggedOut } from '@hellocoop/nextjs'

export getServerSideProps // this adds the user object to the props passed in by wrapping getting user from IronSession - this runs server side and returned with page

export default function ssrPage({user}) {
  <LoggedIn user={user}> // logged in looks for user being passed in, and uses it rather than make call to getUser()
    <content></content>
  </LoggedIn>
  <LoggedOut user={user}>
    <content></content>
  </LoggedOut>
}
