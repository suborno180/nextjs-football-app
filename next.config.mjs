/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media-4.api-sports.io',
                port: '',
                pathname: '/**',
            },
        ],
    }
};

export default nextConfig;
