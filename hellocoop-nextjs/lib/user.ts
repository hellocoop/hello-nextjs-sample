import { IronSessionData } from 'iron-session'
import { withIronSessionSsr } from 'iron-session/next'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { Claims } from '@hellocoop/utils'
import * as config from '../lib/config'

export type User = {
    isLoggedIn: false
} | ({
    isLoggedIn: true
} & Claims)

export interface GetUserOptions {
    session: IronSessionData
}

export const getSessionUser = ({ session }: GetUserOptions) => {
    return session.user
}

const getProps = function (context:GetServerSidePropsContext): GetServerSidePropsResult<{user:User}> {
    const user: User = context.req?.session?.user || { isLoggedIn: false }
    return {
        props: {user}
    }
}


export const getServerSideProps = withIronSessionSsr(getProps,config.sessionOptions)