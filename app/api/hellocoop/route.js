import config from '../../../hello.config'
import { appAuth } from '@hellocoop/nextjs'
export const { GET } = appAuth(config)
