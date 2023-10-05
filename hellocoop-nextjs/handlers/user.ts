import { NextApiRequest, NextApiResponse } from 'next'
import { withIronSessionApiRoute } from 'iron-session/next'

import * as config from '../lib/config'
import type { User } from '../lib/user'

const handleUser = async (req: NextApiRequest, res: NextApiResponse<User>) => {
    if (req.session?.user?.isLoggedIn) {
        res.json({
            ...req.session.user,
            isLoggedIn: true
        })
    } else {
        res.json({
            isLoggedIn: false
        })
    }
}
// wrap handler
export default withIronSessionApiRoute( handleUser, config.sessionOptions)
