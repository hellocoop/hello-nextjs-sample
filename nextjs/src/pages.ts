// pages router

import { serialize } from 'cookie'

import type {
    GetServerSidePropsContext,
    GetServerSidePropsResult,
    NextApiHandler,
    NextApiRequest,
    NextApiResponse,
} from 'next'

import { Auth } from '@hellocoop/definitions'

import {
    router,
    HelloResponse,
    HelloRequest,
    clearAuthCookieParams,
    getAuthfromCookies,
    isConfigured,
    configure,
    Config,
} from '@hellocoop/api'

import { parse } from 'url'

declare module 'next' {
    interface NextApiRequest {
        auth?: Auth
    }
}

const convertToHelloRequest = (
    req: NextApiRequest,
    res: NextApiResponse,
): HelloRequest => {
    return {
        headers: () => req.headers as { [key: string]: string },
        query: req.query as { [key: string]: string } | {},
        path: req.url ? (parse(req.url, true)?.pathname as string) : '/',
        getAuth: () => req.auth,
        setAuth: (auth: Auth) => {
            req.auth = auth
        },
        method: req.method as string,
        body: req.body as any,
        frameWork: 'nextjs',
        loginSyncWrapper: (loginSync, params) => {
            return loginSync({ ...params, req, res })
        },
        logoutSyncWrapper: (logoutSync) => {
            return logoutSync({ req, res })
        },
    }
}

const convertToHelloResponse = (res: NextApiResponse): HelloResponse => {
    return {
        clearAuth: () => {
            const { name, value, options } = clearAuthCookieParams()
            res.setHeader('Set-Cookie', serialize(name, value, options))
        },
        send: (data: any) => res.send(data),
        json: (data: any) => res.json(data),
        redirect: (url: string) => res.redirect(url),
        setCookie: (name: string, value: string, options: any) => {
            res.setHeader('Set-Cookie', serialize(name, value, options))
        },
        setHeader: (name: string, value: string | string[]) => {
            if (Array.isArray(value)) {
                if (name.toLowerCase() === 'set-cookie') {
                    value.forEach((val) => res.setHeader(name, val)) // Append each cookie individually
                } else {
                    res.setHeader(name, value.join(', ')) // Combine array values into a single string separated by commas
                }
            } else {
                res.setHeader(name, value)
            }
        },
        getHeaders: () => {
            throw new Error('getHeaders not implemented')
        }, // not implemented
        status: (statusCode: number) => {
            res.status(statusCode)
            return {
                send: (data: any) => res.send(data),
            }
        },
    }
}

export const getServerSideProps = async function (
    context: GetServerSidePropsContext,
): Promise<GetServerSidePropsResult<{ auth: Auth }>> {
    const req = context.req as NextApiRequest
    const res = context.res as NextApiResponse
    if (req.auth)
        return {
            props: { auth: req.auth },
        }
    const helloReq = convertToHelloRequest(req, res)
    const helloRes = convertToHelloResponse(context.res as NextApiResponse)

    const auth = await getAuthfromCookies(helloReq, helloRes)
    return {
        props: { auth },
    }
}

export const getAuth = async function (req: NextApiRequest): Promise<Auth> {
    if (req.auth) return req.auth
    const dummyResponse: NextApiResponse = {} as NextApiResponse
    const helloReq = convertToHelloRequest(req, dummyResponse)
    const auth = await getAuthfromCookies(helloReq)
    return auth
}

export const pageAuth = function (config: Config): NextApiHandler {
    if (!isConfigured) {
        configure(config as Config)
    }
    const r = async (req: NextApiRequest, res: NextApiResponse) => {
        const helloReq = convertToHelloRequest(req, res)
        const helloRes = convertToHelloResponse(res)
        await router(helloReq, helloRes)
    }
    return r
}

export const pagesAuth = pageAuth
