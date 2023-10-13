
import type { LoggedInParams, LoggedInResponse  } from '@hellocoop/nextjs'


const loggedIn = async function ({ token, payload, req, res }: LoggedInParams): Promise<LoggedInResponse> {
    // token is OpenID Connect ID Token string 
    // payload: Claims - a the parsed and typed payload from the ID Token
    //      eg. payload.sub
    // req: NextApiRequest
    //      eg. req.cookies
    // res: NextApiResponse
    //      can be used to set cookies, or handle response
    //      if response has sent, return isProcessed=true in response
    // 
    const response = {
        // accessDenied: true   - will delete auth cookie
        // isProcessed: true    - if this function has handled the response
        // auth: {              - customize what is returned from useAuth() and getAuth() 
        //     ... properties for auth cookie
        // }
        //
    }
    return response
}

export default loggedIn