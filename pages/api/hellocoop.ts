// pages/api/hellocoop.ts

import config from '../../hello.config'
import { pageAuth } from '@hellocoop/nextjs'
export default pageAuth(config)
