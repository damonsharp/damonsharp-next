"use client";

import { HttpLink } from "@apollo/client";
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
} from "@apollo/client-integration-nextjs";

const makeClient = () => {
	const httpLink = new HttpLink({
		uri: process.env.NEXT_PUBLIC_WP_GRAPHQL_URL
	});

	return new ApolloClient({
		// use the `InMemoryCache` from "@apollo/client-integration-nextjs"
		cache: new InMemoryCache(),
		link: httpLink,
	});
};

const ApolloWrapper = ({ children }) => {
	return (
		<ApolloNextAppProvider makeClient={makeClient}>
			{children}
		</ApolloNextAppProvider>
	);
};

export default ApolloWrapper;
