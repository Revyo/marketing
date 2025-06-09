import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
	title: "Expert Software Consulting Services | Revyo Software",
	description: "Professional software consulting for startups and government clients. Custom development, system integration, enterprise security, and digital transformation solutions.",
	keywords: [
		"software consulting services",
		"custom software development",
		"enterprise solutions",
		"government software contracts",
		"system integration services",
		"digital transformation consulting",
		"enterprise security solutions",
		"software development"
	],
	alternates: {
		canonical: "https://revyosoftware.com"
	},
	openGraph: {
		title: "Expert Software Consulting Services | Revyo Software",
		description: "Professional software consulting for startups and government clients. Custom development, system integration, and digital transformation.",
		url: "https://revyosoftware.com",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Revyo Software - Expert Software Consulting Services"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Expert Software Consulting Services | Revyo Software",
		description: "Professional software consulting for startups and government clients.",
		images: ["/og-image.jpg"]
	}
}

export default function Home() {
	return (
		<div className="min-h-screen">
			<main>
				<HeroSection />
				<ServicesSection />
				<AboutSection />
				<ContactSection />
			</main>
		</div>
	);
}
