import Cors from 'cors'

import initMiddleware from './init-middleware'
import { allowedOrigin } from './config'

export const consentCors = initMiddleware(
    Cors({
        methods: ['POST', 'OPTIONS'],
        origin: allowedOrigin
    })
)
