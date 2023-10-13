import { HelloAuth } from '@hellocoop/nextjs'
import loggedIn from '@/src/loggedIn' // skeleton for logged in

const config = {
    callbacks: {
        loggedIn
    }
}
export default HelloAuth(config)