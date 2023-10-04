import useUser from "./user"

export function LoggedIn({ user, children }: any) { //TBD type: any
    const u = user || useUser()
    if(!user || u?.isLoggedIn)
        return
    return children
}

export function LoggedOut({ user, children }: any) { //TBD type: any
    const u = user || useUser()
    if(!user || u?.isLoggedIn)
        return
    return children
}