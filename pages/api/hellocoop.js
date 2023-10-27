// import { pageAuth } from '@hellocoop/nextjs'
// import loggedIn from '@/src/loggedin' // skeleton for logged in

// const config = {
//     callbacks: {
//         loggedIn
//     }
// }
// export default pageAuth(config)

import { pageAuth } from '@hellocoop/nextjs'
let config
try {
    config = await import('@hello.config')
} catch (error) {
    console.error('Could not import hello.config') 
    process.exit(1)   
}
export default pageAuth(config)    

