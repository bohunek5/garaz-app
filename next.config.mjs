/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/garaz-app",
    images: {
        unoptimized: true,
    },
    trailingSlash: true, // Optional but good for static export
};

export default nextConfig;
