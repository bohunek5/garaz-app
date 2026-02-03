/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/garaz-app",
    trailingSlash: true,
};

export default nextConfig;
