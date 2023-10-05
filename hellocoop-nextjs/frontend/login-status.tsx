import useUser from "./user"
import { useHelloProviderContext } from "./provider"

export function LoggedIn({ user, children }: any) { //TBD type: any
    const u = user || useHelloProviderContext() || useUser()

    console.log('LoggedIn:u:',JSON.stringify(u,null,4))

    if (u?.isLoggedIn)
        return children
}

export function LoggedOut({ user, children }: any) { //TBD type: any
    const u = user || useHelloProviderContext() || useUser()

    console.log('LoggedOut:u:',JSON.stringify(u,null,4))

    if (!u?.isLoggedIn)
        return children
}