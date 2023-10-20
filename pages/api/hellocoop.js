import { pageAuth } from '@hellocoop/nextjs'
import loggedIn from '@/src/loggedin' // skeleton for logged in

const config = {
    callbacks: {
        loggedIn
    }
}
export default pageAuth(config)