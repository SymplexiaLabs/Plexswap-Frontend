import transpileModules from 'next-transpile-modules'

const withTH = transpileModules(['@plexswap/ui-plex', '@plexswap/wagmi', '@plexswap/sdk'])

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
}

export default withTH(nextConfig)
