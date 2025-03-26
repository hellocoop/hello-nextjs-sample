export type {
    Config as HelloConfig,
    LoginSyncResponse,
    LogoutSyncResponse,
    LoginSyncParams,
} from '@hellocoop/api'
export type { Auth } from '@hellocoop/definitions'

// pageAuth is synonym for pagesAuth
export { getAuth, getServerSideProps, pageAuth, pagesAuth } from './pages'
// app router functions
export { appAuth } from './app'
export { auth } from './auth'
export * from '@hellocoop/react'
