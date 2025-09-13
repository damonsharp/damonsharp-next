import { Body, Container, Head, Html, Row, Section, Tailwind, Text } from "@react-email/components";

const ContactToAdmin = ({ fullName = "Damon", message = "testing" }) => {
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body className="p-12">
					<Container>
						<Section>
							<Row>
								<Text>The following message was received from {fullName}...</Text>
							</Row>
							<Row>
								<Text>{message}</Text>
							</Row>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default ContactToAdmin;
