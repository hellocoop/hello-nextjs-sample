
import type { LoggedInParams, LoggedInResponse } from '@hellocoop/nextjs'


const loggedIn = async function ({ token, payload, req, res }: LoggedInParams): Promise<LoggedInResponse> {
    // token: string - a compact OpenID Connect ID Token  
    // payload: Claims - the parsed and typed payload from the ID Token
    //      eg. payload.sub
    // req: NextApiRequest
    //      eg. req.cookies
    // res: NextApiResponse
    //      can be used to set cookies, or handle response
    //      if response has sent, return isProcessed=true in response
    // 
    // const { name, email, picture, sub } = payload // getting claims from payload
    const response: LoggedInResponse = {
    //     // accessDenied: true,   // - will delete auth cookie
    //     // isProcessed: true,   //  - if this function has handled the response
    //     updatedAuth: {              // customize what is returned from useAuth() and getAuth()
    //         name, email, picture,   // defaults
    //         role: 'admin'           // additional property
    //     }
    }
    return response
}

export default loggedIn