import useSWR from 'swr'
import type { Auth } from '@hellocoop/definitions'

import { useHelloProviderContext, routeConfig } from './provider'

const fetcher = async (url: string): Promise<Auth | undefined> => {
    try {
        const response = await fetch(url)
        const auth = await response.json()
        return auth
    } catch (err) {
        console.error(err)
        return undefined
    }
}

export type AuthState = {
    auth: Auth | {}
    isLoading: boolean
    isLoggedIn: boolean | undefined
}

export const useAuth = (): AuthState => {
    // TBD type: Auth | any -- TS complaints without any
    const defaultAuth: Auth | any = useHelloProviderContext()
    if (defaultAuth)
        return {
            auth: defaultAuth,
            isLoading: false,
            isLoggedIn: defaultAuth?.isLoggedIn,
        }
    const { data: auth, isLoading } = useSWR(routeConfig.auth, fetcher)
    return {
        auth: auth || {},
        isLoading,
        isLoggedIn: auth?.isLoggedIn,
    }
}
