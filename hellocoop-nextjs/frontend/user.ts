import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

import { userApiRoute, defaultTargetRoute } from '../lib/config'
import type { User } from '../lib/user'

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function useUser(): User | undefined {
    const { data: user } = useSWR<User>(userApiRoute, fetcher)
    const router = useRouter()
    const pathname = router.pathname

    useEffect(() => {
        if (user && !user?.isLoggedIn) {
            router.push(defaultTargetRoute)
        }
    }, [user, pathname])

    return user
}
