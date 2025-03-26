/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            {
                protocol: 'https',
                hostname: 'cdn.hello.coop' //Hellō Generic Profile Picture
            },
            {
                protocol: 'https',
                hostname: 'pictures.hello.coop'
            },
            {
                protocol: 'https',
                hostname: 'gravatar.com'
            },
            {
                protocol: 'https',
                hostname: 'hello-staging.net'
            },
            {
                protocol: 'https',
                hostname: 'hello-beta.net'
            },
            {
                protocol: 'https',
                hostname: 'hello-dev.net'
            },
        ]
    }
};

export default nextConfig;
