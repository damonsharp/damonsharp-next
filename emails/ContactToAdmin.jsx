import React from "react";
import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Row,
	Section,
	Text
} from "@react-email/components";

const ContactToAdmin = ({
	fullName = "Damon",
	message = "testing"
}) => {
	return (
		<Html>
			<Head/>
			<Body className="bg-accent text-center p-12">
				<Container style={{ padding: "20px" }} className="bg-neutral p-24 mx-auto max-w-max">
					<Section className="p-12">
						<Row>
							<Heading className="mb-4" as="h1">Hello, {fullName} -</Heading>
						</Row>
						<Row>
							<Text className="text-primary">
								Thanks for reaching out through my website. I do my best to respond promptly -- usually within a few hours, but give me 1-2 days just is case.
							</Text>
						</Row>
					</Section>
					<Hr className="my-6"/>
					<Section>
						<Row>
							<Heading as={"h2"} className="text-sm">
								Including your message for reference...
							</Heading>
						</Row>
						<Row>
							<Text>{message}</Text>
						</Row>
					</Section>
					<Hr className="my-4 w-1/2"/>
					<Section>
						<Row>
							<div className="p-1 rounded border-2 border-accent max-w-max mx-auto">
								<Img
									className="m-auto size-18"
									src="https://www.damonsharp.me/dws-logo.svg"
								/>
							</div>
						</Row>
						<Row>
							<Text className="text-center">Damon Sharp</Text>
						</Row>
					</Section>
				</Container>
			</Body>
		</Html>
	);
};

export default ContactToAdmin;
