/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'damonsharp.me',
				pathname: '/wp-content/uploads/**',
				port: '',
				search: ''
			},
			{
				protocol: 'https',
				hostname: 'damonsharp-wp.test',
				pathname: '/wp-content/uploads/**',
				port: '',
				search: ''
			},
			{
				protocol: 'https',
				hostname: 'dws.230studios.local',
				pathname: '/wp-content/uploads/**',
				port: '',
				search: ''
			},
		]
	},

};

export default nextConfig;
