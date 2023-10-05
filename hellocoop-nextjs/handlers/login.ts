import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'
import { createAuthRequest, redirectURIBounce, ICreateAuthRequest, Scope, ProviderHint } from '@hellocoop/utils'
import * as config from '../lib/config'

var redirectURIs: Record<string, any> = {}

// var callCount = 0 // DEBUG

const handleLogin = async (req: NextApiRequest, res: NextApiResponse) => {
    const { provider_hint: providerParam, scope: scopeParam, target_uri, redirect_uri } = req.query

    if (!config.clientId) {
        res.status(500).end('Missing HELLO_CLIENT_ID configuration')
        return
    }

// callCount++
// console.log('login called:',callCount)

    let redirectURI = config.redirectURI as string
    let host = req.headers?.host as string
    if (!redirectURI) {
        if (redirectURIs[host]) {
            redirectURI = redirectURIs[host]
        } else {
            if (redirect_uri) {
                const redirectUriString =  Array.isArray(redirect_uri) ? redirect_uri[0] : redirect_uri
                const redirectHost = (new URL(redirectUriString)).host
                if (redirectHost != host) {
// TBd -- this might happen if we are behind a proxy where our host and the browser host are different -- look at X-headerrs
                    const err = `host from redirect_uri=${redirectHost}, expected ${host}`
                    console.error(err)
                    return res.status(500).end(err)
                }
                redirectURIs[host] = redirectURI = redirect_uri as string
                console.log(`RedirectURI for ${host}=${redirectURI}`)
            } else {            
                console.log('Discovering API RedirectURI route ...')
                return res.end(redirectURIBounce())        
            }
        }
    }
    // parse out param strings
    const targetURIstring = Array.isArray(providerParam) ? providerParam[0] : providerParam
    const provider_hint = targetURIstring?.split(' ').map((s) => s.trim()) as ProviderHint[] | undefined
    const scopeString = Array.isArray(scopeParam) ? scopeParam[0] : scopeParam
    const scope = scopeString?.split(' ').map((s) => s.trim()) as Scope[] | undefined

    const request: ICreateAuthRequest = {
        redirect_uri: redirectURI,
        client_id: config.clientId,
        wallet: config.helloWallet,
        scope,
        provider_hint
    }
    const { url, nonce, code_verifier } = await createAuthRequest(request)
    req.session.oidc = {
        nonce,
        code_verifier,
        redirect_uri: redirectURI,
        target_uri: (Array.isArray(target_uri) ? target_uri[0] : target_uri)|| config.defaultTargetRoute
    }

    await req.session.save()
    res.redirect(url)
}
// wrap handler
export default withIronSessionApiRoute( handleLogin, config.sessionOptions)
