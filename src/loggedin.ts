
import type { LoginSyncParams, LoginSyncResponse } from '@hellocoop/nextjs'


const loggedIn = async function ({ token, payload, cbReq, cbRes }: LoginSyncParams): Promise<LoginSyncResponse> {
    // token: string - a compact OpenID Connect ID Token  
    // payload: Claims - the parsed and typed payload from the ID Token
    //      eg. payload.sub
    // req: CallbackRequest,
    //      req.getHeaders()
    // res: CallbackResponse
    //      res.setHeader()
    //      res.setCookie()
    // 
    // const { name, email, picture, sub } = payload // getting claims from payload
    const response: LoginSyncResponse = {
    //     // accessDenied: true,   // - will delete auth cookie
    //     // target_uri:           // - will redirect to target_uri if provided
    //     updatedAuth: {              // customize what is returned from useAuth() and getAuth()
    //         name, email, picture,   // defaults
    //         role: 'admin'           // additional property
    //     }
    }
    return response
}

export default loggedIn