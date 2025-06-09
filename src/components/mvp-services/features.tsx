import {
	HandHeart,
	MapIcon,
	Monitor,
	Palette,
	Rocket,
	TestTube,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Features() {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-5xl mx-auto">
					<div className="text-center mb-16">
						<Badge variant="outline" className="mb-4">
							Package Details
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Your All-Inclusive MVP Launchpad Package
						</h2>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<Card className="h-full hover:shadow-lg transition-shadow">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-primary/10 rounded-lg">
										<MapIcon className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>Strategy & Scoping Workshop</CardTitle>
								</div>
								<CardDescription>
									We'll kick things off with a deep dive to define your core
									user, map out the essential features, and create a clear
									project roadmap.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full hover:shadow-lg transition-shadow">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-primary/10 rounded-lg">
										<Palette className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>UI/UX & Prototyping</CardTitle>
								</div>
								<CardDescription>
									A clean, intuitive, and professional design that delights your
									first users. You'll get interactive prototypes to approve
									before we write a single line of code.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full hover:shadow-lg transition-shadow">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-primary/10 rounded-lg">
										<Monitor className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>Core Feature Development</CardTitle>
								</div>
								<CardDescription>
									Our expert developers will build the key functionalities of
									your app using a modern, robust tech stack (e.g., React,
									Node.js, Python).
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full hover:shadow-lg transition-shadow">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-primary/10 rounded-lg">
										<Rocket className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>Deployment & Launch</CardTitle>
								</div>
								<CardDescription>
									We handle the entire deployment process to get your app live
									on the web.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full hover:shadow-lg transition-shadow">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-primary/10 rounded-lg">
										<TestTube className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>Quality Assurance & Testing</CardTitle>
								</div>
								<CardDescription>
									Rigorous testing to ensure your MVP is stable, secure, and
									ready for your first users.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full hover:shadow-lg transition-shadow">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-primary/10 rounded-lg">
										<HandHeart className="h-6 w-6 text-primary" />
									</div>
									<CardTitle>Post-Launch Support</CardTitle>
								</div>
								<CardDescription>
									30 days of included support to fix any critical bugs and
									ensure a smooth launch.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
