import useUser from "./user"

export function LoggedIn({ user, children }: any) { //TBD type: any
    const u = user || useUser()

    console.log('LoggedIn:u:',JSON.stringify(u,null,4))

    if (!u || !u?.isLoggedIn)
        return
    return children
}

export function LoggedOut({ user, children }: any) { //TBD type: any
    const u = user || useUser()

    console.log('LoggedOut:u:',JSON.stringify(u,null,4))


    if (!u || u?.isLoggedIn)
        return
    return children
}