/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['media-4.api-sports.io'],
    },
    sitemap: {
        // You can specify additional configuration options here
        // See: https://www.npmjs.com/package/next-sitemap
        exclude: ['/terms', '/privacy'], // Add any paths you want to exclude from the sitemap
    },
    reactStrictMode: true,
}

module.exports = nextConfig