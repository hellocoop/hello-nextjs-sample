import { NextApiHandler } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'

import { sessionOptions } from '../lib/config'

export const withHelloApiRoute = ( handler: NextApiHandler ) => {
    withIronSessionApiRoute(handler, sessionOptions)
}
