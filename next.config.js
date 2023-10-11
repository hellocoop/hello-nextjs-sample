/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'cdn.hello.coop', //Hellō Generic Profile Picture
        'pictures.hello.coop',
        'www.gravatar.com'
      ]
    }
}

module.exports = nextConfig
