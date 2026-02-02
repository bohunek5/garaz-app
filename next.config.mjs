/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/garaz-app",
    assetPrefix: "/garaz-app",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;
