"use client";

import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache
} from "@apollo/client";

const client = new ApolloClient( {
	uri: process.env.NEXT_PUBLIC_WP_GRAPHQL_URL,
	cache: new InMemoryCache(),
} );

const ApolloWrapper = ( { children } ) => {
	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
};

export default ApolloWrapper;