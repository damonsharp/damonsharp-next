import { Body, Container, Head, Heading, Hr, Html, Img, Row, Section, Tailwind, Text } from "@react-email/components";

const ContactToSender = ({ fullName = "Damon", message = "testing" }) => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className="p-12">
					<Container style={{ padding: "20px" }} className="bg-neutral p-24 mx-auto max-w-max">
						<Section>
							<Row>
								<Heading className="mb-2" as="h1">
									Hello, {fullName} -
								</Heading>
							</Row>
							<Row>
								<Text className="text-primary">
									Thanks for reaching out through my website. I do my best to respond promptly --
									usually within a few hours, but give me 1-2 days just is case.
								</Text>
							</Row>
						</Section>
						<Hr className="my-6 border border-gray-500" />
						<Section>
							<Row>
								<Heading className="mb-2" as={"h2"} className="text-sm">
									Including your message for reference...
								</Heading>
							</Row>
							<Row>
								<Text>{message}</Text>
							</Row>
						</Section>
						<Hr className="my-6 border border-gray-500" />
						<Section>
							<Row>
								<div className="py-2 max-w-max">
									<Img
										className="m-auto size-20"
										src="https://www.damonsharp.me/dws-logo.svg"
										width="80px"
										height="80px"
									/>
								</div>
							</Row>
							<Row>
								<Text>Damon Sharp</Text>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactToSender;
