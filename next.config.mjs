/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'cdn.hello.coop', //Hellō Generic Profile Picture
            'pictures.hello.coop',
            'www.gravatar.com',
            'pictures.hello-staging.net',
            'pictures.hello-dev.net'
        ]
    }
};

export default nextConfig;
