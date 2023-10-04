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

export const getUser = ({ session }: GetUserOptions) => {
    return session.user
}

const getProps = function (context:GetServerSidePropsContext): GetServerSidePropsResult<User> {
    const user: User = context.req?.session?.user || { isLoggedIn: false }


console.log('getProps:user:',JSON.stringify(user,null,4))
console.log('getProps.cookies',JSON.stringify(context.req.cookies, null, 4))

    // if (!user) {
    //     return {
    //         redirect: {
    //             statusCode: 302,
    //             destination: config.defaultTargetRoute
    //         }
    //     }
    // }
    return {
        props: user
    }
}

export const getServerSideProps = withIronSessionSsr(getProps,config.sessionOptions)