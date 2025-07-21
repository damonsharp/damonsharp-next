/** @type {import("next").NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "dws.230studios.com",
				pathname: "/wp-content/uploads/**",
				port: "",
				search: ""
			},
			{
				protocol: "https",
				hostname: "dws.230studios.test",
				pathname: "/wp-content/uploads/**",
				port: "",
				search: ""
			},
		]
	},

};

export default nextConfig;
