// pages/api/hellocoop.js

const config = rquire('../../hello.config')
const { pageAuth } = require('@hellocoop/nextjs')
module.exports = pageAuth(config)
