import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Resume() {
	return (
		<div className="md:grid md:grid-cols-4">
			<section className="md:col-span-3">
				<h1>Resume Page</h1>
			</section>
			<Sidebar classes="md:col-span-1 bg-white p-6 rounded-sm shadow-sm">
				<h3>This is an aside component.</h3>
			</Sidebar>
		</div>
	);
}
