"use client";

import { useQuery } from "@apollo/client";
import HOME_PAGE_QUERY from "@/app/queries/getHomePage";
import { escHtml } from "@/app/utils";
import ApolloWrapper from '@/components/ApolloWrapper';

export default function Home () {
	const {
		loading,
		error,
		data
	} = useQuery(HOME_PAGE_QUERY);

	if (loading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return <p>Error : {error.message}</p>;
	}

	const { id, title, content } = data?.page;

	return (
		<>
			<h1>{title}</h1>
			{escHtml(content)}
		</>
	);
}

