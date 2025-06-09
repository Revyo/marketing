import type { Metadata } from "next"
import HeroSection from "@/components/mvp-services/hero-section";
import Problem from "@/components/mvp-services/problem";
import Solution from "@/components/mvp-services/solution";
import Features from "@/components/mvp-services/features";
import Process from "@/components/mvp-services/process";
import Offer from "@/components/mvp-services/offer";
import FAQ from "@/components/mvp-services/faq";
import CTA from "@/components/mvp-services/cta";

export const metadata: Metadata = {
	title: "MVP Development Services - Launch Your Startup in 90 Days | Revyo Software",
	description: "Turn your big idea into a market-ready MVP in 90 days. Fixed-price MVP development package for ambitious founders. Get your startup to market fast with our expert team.",
	keywords: [
		"MVP development",
		"startup MVP services",
		"minimum viable product development",
		"90-day MVP launch",
		"fixed-price MVP package",
		"startup development services",
		"rapid prototyping",
		"product validation",
		"startup software development",
		"founder-friendly pricing",
		"MVP launchpad",
		"startup consulting",
		"product development",
		"software consulting for startups"
	],
	alternates: {
		canonical: "https://revyosoftware.com/mvp-services"
	},
	openGraph: {
		title: "MVP Development Services - Launch Your Startup in 90 Days | Revyo Software",
		description: "Turn your big idea into a market-ready MVP in 90 days. Fixed-price development package for ambitious founders starting at $18,000.",
		url: "https://revyosoftware.com/mvp-services",
		type: "website",
		images: [
			{
				url: "/og-mvp-services.jpg",
				width: 1200,
				height: 630,
				alt: "Revyo Software MVP Development Services - Launch Your Startup in 90 Days"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "MVP Development Services - Launch Your Startup in 90 Days",
		description: "Turn your big idea into a market-ready MVP in 90 days. Fixed-price development package for ambitious founders.",
		images: ["/og-mvp-services.jpg"]
	}
}

export default function MVPServices() {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<Problem />
			<Solution />
			<Features />
			<Process />
			<Offer />
			<FAQ />
			<CTA />
		</div>
	);
}
