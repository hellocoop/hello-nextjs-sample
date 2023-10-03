import { IronSessionData } from 'iron-session'

import { Claims } from '@hellocoop/utils'

export type User = {
    isLoggedIn: false
} | ({
    isLoggedIn: true
} & Claims)

export interface GetUserOptions {
    session: IronSessionData
}

export const getUser = ({ session }: GetUserOptions) => {
    return session.user
}
