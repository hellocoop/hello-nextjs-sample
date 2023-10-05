import type { IronSessionOptions } from 'iron-session'
import { DEFAULT_SCOPE } from '@hellocoop/utils'

export const apiRoute: string        
    = process.env.HELLO_API_ROUTE
    || '/api/hellocoop'

export const defaultTargetRoute: string
    =  process.env.HELLO_DEFAULT_TARGET_ROUTE
    || '/'

export const defaultLoggedOutRoute: string
    =  process.env.HELLO_DEFAULT_LOGGED_OUT_ROUTE
    || '/'

export const host: string | undefined 
    = process.env.HELLO_HOST

export const redirectURI: string | undefined
    =  process.env.HELLO_REDIRECT_URI
    || process.env.HELLO_HOST ? `https://${process.env.HELLO_HOST}${process.env.HELLO_ROUTE}` : undefined

export const defaultScope             
    = (process.env.HELLO_DEFAULT_SCOPE as string)?.split(' ').map((s) => s.trim())
    || DEFAULT_SCOPE

export const clientId: string 
    =  process.env.HELLO_CLIENT_ID as string
    || process.env.HELLO_CLIENT_ID_DEFAULT as string // from next.config.js

export const sessionOptions: IronSessionOptions = {
    cookieName: 'hellocoop-nextjs',
    password:   process.env.HELLO_SESSION_SECRET as string
                || process.env.HELLO_SESSION_SECRET_DEFAULT as string, // from next.config.js
    cookieOptions: {
        // secure: true should be used in production (HTTPS) but not development (HTTP)
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
    } 
}

export const userApiRoute: string =         `${apiRoute}?profile=me`
export const loginApiRoute: string =        `${apiRoute}?login=true`
export const logoutApiRoute: string =       `${apiRoute}?logout=true`

// for internal testing
export const helloDomain: string 
    = process.env.HELLO_DOMAIN as string
    || 'hello.coop'

// for using a mock Hellō server
export const helloWallet: string
    =  process.env.HELLO_WALLET as string
    || 'https://wallet.'+helloDomain

export const allowedOrigin: string = (new URL(helloWallet)).origin


// const requiredScopes = ['openid']

// export interface Config {
//     redirectURI?: string,
//     apiRoute: string,
//     userApiRoute: string,
//     defaultTargetRoute: string,
//     clientId?: string,
//     scopes: string[],
//     sessionOptions: IronSessionOptions
// }



