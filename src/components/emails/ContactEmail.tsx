interface ContactEmailProps {
	name: string;
	email: string;
	message: string;
}
export default function ContactEmail({ name, email, message }: ContactEmailProps) {
	return (
		<div>
			<h1>A new contact form submission</h1>
			<p>Name: {name}</p>
			<p>Email: {email}</p>
			<p>Message: {message}</p>
		</div>
	);
}
