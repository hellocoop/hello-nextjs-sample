import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

import * as config from '../lib/config'
import handleCallback from './callback'
import handleLogin from './login'
import handleLogout from './logout'
import handleUser from './user'
import { User } from '../lib/user'

const translateHandlerErrors = (handler: NextApiHandler): NextApiHandler =>
    async (req: NextApiRequest, res: NextApiResponse) => {
        try {
            await handler(req, res)
        } catch (error: any) {
            console.error(error)
            res.status(error?.status || 500).end(error.message)
        }
    }

let configured = true
if (!config.sessionOptions.password) {
    console.error('Missing HELLO_SESSION_SECRET configuration')
    configured = false
}

if (!config.clientId) {
    console.error('Missing HELLO_CLIENT_ID configuration')
    configured = false
}        

console.log('config\n',JSON.stringify(config,null,4))   

export const handleAuth = translateHandlerErrors((req: NextApiRequest, res: NextApiResponse) => {
        const { query } = req

console.log({query})     

        if (query.profile) {
            if (configured)
                return handleUser(req, res) 
            else    // don't blow up buttons
                return res.end({isLoggedIn:false} as User)    
        }

        if (!configured)
            return res.status(500).end('Missing configuration:\n'+JSON.stringify(config,null,4))

        if (query.code || query.error) { // authorization response
            return handleCallback(req, res)
        }

        if (query.logout) {     // logout user
            return handleLogout(req, res)
        }

        if (query.iss) {        // IdP (Hellō) initiated login
            // https://openid.net/specs/openid-connect-core-1_0.html#ThirdPartyInitiatedLogin
            throw new Error('unimplemented')
        }

        if (query.login) {
            return handleLogin(req, res)
        }

        res.status(500).end('Invalid hellocoop call:\n'+JSON.stringify(query,null,4))
    })
