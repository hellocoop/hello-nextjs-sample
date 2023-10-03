import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'

import * as config from '../lib/config'

const handleLogout = async (req: NextApiRequest, res: NextApiResponse) => {
    req.session.destroy()
    res.redirect(config.defaultLoggedOutRoute) 
}
// wrap handler
export default withIronSessionApiRoute( handleLogout, config.sessionOptions)

