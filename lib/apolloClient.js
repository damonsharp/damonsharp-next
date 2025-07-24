import {
	ApolloClient,
	InMemoryCache,
} from "@apollo/client";

export const { query } = new ApolloClient({
	cache: new InMemoryCache(),
	uri: process.env.NEXT_PUBLIC_WP_GRAPHQL_URL,
	defaultOptions: {
		query: {
			fetchPolicy: "no-cache",
		},
	}
});
