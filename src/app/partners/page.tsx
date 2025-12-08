import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Lock, PlugZap, SignalHigh } from "lucide-react";

export const metadata: Metadata = {
	title: "Partners | Revyo Software",
	description:
		"See how Revyo Software pairs with integrate.dev to connect your apps quickly, securely, and without extra engineering overhead.",
	alternates: {
		canonical: "https://revyosoftware.com/partners",
	},
	openGraph: {
		title: "Partners | Revyo Software",
		description:
			"Revyo Software + integrate.dev: AI-native SDK, unified integrations, server-side OAuth, and secure tool calls.",
		url: "https://revyosoftware.com/partners",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Revyo Software Partnerships",
			},
		],
	},
};

const capabilities = [
	{
		title: "AI-ready toolkit",
		description: "Prebuilt pieces that let AI features talk to other tools without custom plumbing.",
		icon: PlugZap,
		points: [
			"Launch new ideas faster instead of building connectors from scratch",
			"Works with common AI frameworks your team may already use",
		],
	},
	{
		title: "One setup, many apps",
		description: "One approach that covers popular business tools so we move quickly.",
		icon: CheckCircle2,
		points: [
			"Covers Gmail, Slack, Notion, GitHub, and more",
			"Same sign-in and error handling everywhere, less to support",
		],
	},
	{
		title: "Secure sign-ins",
		description: "Keeps passwords and tokens protected while giving users safe access.",
		icon: Lock,
		points: [
			"Uses proven permission screens your security team can review",
			"Protects credentials while allowing the right level of access",
		],
	},
	{
		title: "Live monitoring",
		description: "See how every connection performs so issues get fixed fast.",
		icon: SignalHigh,
		points: [
			"Real-time visibility into what is working or failing",
			"Clear logs for audits and support conversations",
		],
	},
];

const integrations = [
	"GitHub",
	"Google Workspace",
	"Gmail",
	"Notion",
	"Slack",
	"Google Drive",
	"Jira",
	"Confluence",
	"HubSpot",
	"Linear",
];

export default function Partners() {
	return (
		<div className="min-h-screen bg-background">
			<main className="pt-16">
				<section className="bg-gradient-to-br from-primary/10 via-background to-secondary/30 border-b">
					<div className="max-w-6xl mx-auto px-6 py-20 text-center space-y-6">
						<div className="flex justify-center">
							<Badge variant="secondary" className="px-4 py-2 text-sm">
								In partnership with integrate.dev
							</Badge>
						</div>
						<h1 className="text-4xl md:text-5xl font-bold text-foreground">
							Partner Products Powered by Revyo Software
						</h1>
						<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
							We team up with integrate.dev so we can plug your business tools together fast,
							keep data safe, and avoid you hiring a separate engineering squad.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button asChild size="lg">
								<Link href="https://integrate.dev" target="_blank" rel="noreferrer">
									Sign up at integrate.dev
								</Link>
							</Button>
							<Button asChild variant="outline" size="lg">
								<Link href="/#contact">Talk with Revyo</Link>
							</Button>
						</div>
						<div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground">
							<span className="bg-primary/10 text-primary px-3 py-1 rounded-full">Fast to launch</span>
							<span className="bg-secondary px-3 py-1 rounded-full">Secure sign-ins</span>
							<span className="bg-secondary px-3 py-1 rounded-full">Covers popular apps</span>
							<span className="bg-secondary px-3 py-1 rounded-full">Monitored in real time</span>
							<span className="bg-secondary px-3 py-1 rounded-full">Built for AI workflows</span>
						</div>
					</div>
				</section>

				<section className="py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
							<div className="space-y-6">
								<Badge className="rounded-full">Why this partnership</Badge>
								<h2 className="text-3xl font-semibold">
									Launch integrations faster with less risk.
								</h2>
								<p className="text-lg text-muted-foreground">
									Revyo builds and runs your automation. integrate.dev brings the ready-to-go
									connectors. Together you get live integrations in weeks, not months, with the
									controls your business needs.
								</p>
								<ul className="space-y-3 text-muted-foreground">
									<li className="flex gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
										<span>Move faster—no need to build and maintain a new backend.</span>
									</li>
									<li className="flex gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
										<span>Security-first sign-ins and permissions that pass reviews.</span>
									</li>
									<li className="flex gap-3">
										<CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
										<span>We watch the integrations and fix issues before users feel it.</span>
									</li>
								</ul>
							</div>
							<Card className="shadow-lg">
								<CardHeader>
									<CardTitle className="text-xl">Engagement snapshot</CardTitle>
									<CardDescription>
										How we ship quickly without adding headcount.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div>
										<p className="font-medium">Week 1: Design & access</p>
										<p className="text-sm text-muted-foreground">
											Pick the user journeys that matter most and confirm which tools to connect.
										</p>
									</div>
									<div>
										<p className="font-medium">Week 2-3: Build & validate</p>
										<p className="text-sm text-muted-foreground">
											We build the flows, handle sign-ins, and test with a small group so you see results early.
										</p>
									</div>
									<div>
										<p className="font-medium">Week 4+: Launch & monitor</p>
										<p className="text-sm text-muted-foreground">
											Launch to the rest of your team with monitoring and on-call support from Revyo.
										</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				<section className="py-16 px-6 bg-muted/30 border-y">
					<div className="max-w-6xl mx-auto">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">
							<div>
								<p className="text-sm uppercase tracking-wide text-primary font-semibold">
									Key capabilities
								</p>
								<h3 className="text-2xl font-semibold">What integrate.dev unlocks</h3>
								<p className="text-muted-foreground mt-2">
									It gives us the building blocks so your team sees outcomes sooner—without us getting stuck in setup work.
								</p>
							</div>
							<Button asChild variant="outline">
								<Link href="https://integrate.dev" target="_blank" rel="noreferrer">
									Explore integrate.dev
								</Link>
							</Button>
						</div>
						<div className="grid gap-6 md:grid-cols-2">
							{capabilities.map((capability) => {
								const Icon = capability.icon;
								return (
									<Card key={capability.title} className="h-full">
										<CardHeader className="flex-row items-center gap-3">
											<div className="h-11 w-11 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<CardTitle className="text-lg">{capability.title}</CardTitle>
												<CardDescription>{capability.description}</CardDescription>
											</div>
										</CardHeader>
										<CardContent className="space-y-3">
											<ul className="space-y-2">
												{capability.points.map((point) => (
													<li key={point} className="flex gap-2 text-sm text-muted-foreground">
														<span className="text-primary mt-0.5">•</span>
														<span>{point}</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				<section className="py-16 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="grid gap-10 md:grid-cols-[1fr_1.2fr] items-start">
							<div className="space-y-4">
								<Badge variant="secondary">Built for your stack</Badge>
								<h3 className="text-2xl font-semibold">Integrations your teams expect</h3>
								<p className="text-muted-foreground">
									Connect the apps your people already use every day. We design the steps, permissions, and safety nets so it feels reliable from day one.
								</p>
								<ul className="space-y-3 text-sm text-muted-foreground">
									<li className="flex gap-3">
										<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
										<span>Clear sign-ins your team understands and your security lead approves.</span>
									</li>
									<li className="flex gap-3">
										<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
										<span>Backups and retries so automations keep working when apps hiccup.</span>
									</li>
									<li className="flex gap-3">
										<CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
										<span>Simple logs so support and finance can see what happened.</span>
									</li>
								</ul>
							</div>
							<div className="bg-secondary/30 border rounded-xl p-6">
								<h4 className="text-lg font-semibold mb-4">Popular integrations</h4>
								<div className="flex flex-wrap gap-3">
									{integrations.map((integration) => (
										<span
											key={integration}
											className="px-3 py-2 rounded-full bg-background border text-sm"
										>
											{integration}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="py-16 px-6 bg-primary text-primary-foreground">
					<div className="max-w-5xl mx-auto text-center space-y-6">
						<h3 className="text-3xl font-semibold">Ready to co-launch with integrate.dev?</h3>
						<p className="text-lg opacity-90">
									Revyo handles the project, integrate.dev provides the trusted connectors, and your team gets working integrations without extra overhead.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button asChild variant="secondary" size="lg">
								<Link href="https://integrate.dev" target="_blank" rel="noreferrer">
									Start at integrate.dev
								</Link>
							</Button>
							<Button asChild size="lg" variant="outline" className="bg-primary text-primary-foreground">
								<Link href="/#contact">Plan with Revyo</Link>
							</Button>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
