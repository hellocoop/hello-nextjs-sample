'use client'

import { routeConfig } from './provider'

const makeLogoutRoute = (params: Record<string, any>): string => {
    if (!params || !Object.keys(params).length) return routeConfig.logout
    const logoutRoute = new URL(routeConfig.logout, 'https://example.com') // hack so we can use URL()
    for (const key in params) {
        logoutRoute.searchParams.set(key, params[key])
    }
    return logoutRoute.pathname + logoutRoute.search
}
// const loginRoute = new URL(routeConfig.login, 'https://example.com') // hack so we can use URL()

export const getLogOutRoute = (params: Record<string, any>) =>
    makeLogoutRoute(params)

export function logOut(params: Record<string, any>) {
    if (typeof window !== 'undefined')
        window.location.href = makeLogoutRoute(params)
}
