/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            hostname: 'pictures.hello.coop',
          },
        ],
    },
}

module.exports = nextConfig
