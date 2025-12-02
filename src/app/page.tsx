import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { UseCases } from "@/components/use-cases"
import { PartnershipModel } from "@/components/partnership-model"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
	title: "AI Automation Agency & Consultants | Revyo Software",
	description: "We turn manual, repetitive processes into AI-driven workflows. Custom AI agents, automation tools, and fractional AI Ops for growing businesses.",
	keywords: [
		"AI automation agency",
		"AI operations",
		"custom AI agents",
		"business process automation",
		"AI consulting",
		"workflow automation",
		"fractional AI team",
		"software consulting"
	],
	alternates: {
		canonical: "https://revyosoftware.com"
	},
	openGraph: {
		title: "AI Automation Agency | Revyo Software",
		description: "We turn manual, repetitive processes into AI-driven workflows. Custom AI agents and automation tools.",
		url: "https://revyosoftware.com",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Revyo Software - AI Automation Agency"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "AI Automation Agency | Revyo Software",
		description: "We turn manual, repetitive processes into AI-driven workflows.",
		images: ["/og-image.jpg"]
	}
}

export default function Home() {
	return (
		<div className="min-h-screen">
			<main>
				<HeroSection />
				<HowItWorks />
				<UseCases />
				<PartnershipModel />
				<AboutSection />
				<ContactSection />
			</main>
		</div>
	);
}
