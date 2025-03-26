'use client'

import React, { createContext, useContext } from 'react'

export type RouteConfig = {
    login: string
    auth: string
    logout: string
}
export const routeConfig: RouteConfig = {
    login: '/api/hellocoop?op=login',
    auth: '/api/hellocoop?op=auth',
    logout: '/api/hellocoop?op=logout',
}

const HelloContext = createContext(undefined)

const HelloProvider = ({ children, auth, config }: any) => {
    //TBD any
    if (config?.login) routeConfig.login = config.login
    if (config?.auth) routeConfig.auth = config.auth
    if (config?.logout) routeConfig.logout = config.logout
    return (
        <HelloContext.Provider value={auth}>{children}</HelloContext.Provider>
    )
}

const useHelloProviderContext = () => {
    return useContext(HelloContext)
}

export { HelloProvider, useHelloProviderContext }
