'use client'

import { useAuth } from './auth'

const isLoggedIn = (): boolean => useAuth()?.isLoggedIn || false

export function LoggedIn({ children }: { children: any }) {
    //TBD type: any
    if (isLoggedIn()) return children
}

export function LoggedOut({ children }: { children: any }) {
    //TBD type: any
    if (!isLoggedIn()) return children
}
