/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Enables React's Strict Mode
    api: {
        externalResolver: true,
    },
    // Add other configurations as needed
};

module.exports = nextConfig;
