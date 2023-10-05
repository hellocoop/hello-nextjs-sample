// TBD - what is this doing?


import { NextApiRequest, NextApiResponse } from 'next'

export default function initMiddleware(middleware: any) {
    return (req: NextApiRequest, res: NextApiResponse) => {
        return new Promise((resolve, reject) => {
            middleware(req, res, (result: any) => {
                if (result instanceof Error) {
                    return reject(result)
                }
                return resolve(result)
            })
        })
    }
}
