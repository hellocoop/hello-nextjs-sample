
const nextConfig = require('./next.config')

console.log({nextConfig})

if (nextConfig?.env?.HELLOCOOP_CLIENT_ID === 'REPLACE_WITH_CLIENT_ID') {
    console.log('run quickstart')
    // read in next.config.js
    // replace with client_id
    // Q: generate random session secret?
    // write out
    // Q: check it worked?
}