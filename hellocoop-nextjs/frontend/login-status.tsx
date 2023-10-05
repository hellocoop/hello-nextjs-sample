import { getUser } from "./user"
import type { User } from '../lib/user'

export function LoggedIn({ user, children }: {user:User, children:any}) { //TBD type: any
    const u = getUser(user)
    if (u?.isLoggedIn)
        return children
}

export function LoggedOut({ user, children }: {user:User, children:any}) { //TBD type: any
    const u = getUser(user)
    if (!u?.isLoggedIn)
        return children
}