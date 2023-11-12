// pages/api/hellocoop.js

const config = require('../../hello.config')
const { pageAuth } = require('@hellocoop/nextjs')
module.exports = pageAuth(config)
