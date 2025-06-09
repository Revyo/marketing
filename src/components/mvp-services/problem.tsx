import { Clock, Code, DollarSign, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Problem() {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<Badge variant="outline" className="mb-4">
							The Challenge
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Sound Familiar?
						</h2>
						<p className="text-xl text-muted-foreground">
							You have a game-changing idea, but...
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<Card className="h-full">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-destructive/10 rounded-lg">
										<Clock className="h-6 w-6 text-destructive" />
									</div>
									<CardTitle>Racing Against Time</CardTitle>
								</div>
								<CardDescription>
									You're racing against the clock to get to market before
									someone else does.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-destructive/10 rounded-lg">
										<DollarSign className="h-6 w-6 text-destructive" />
									</div>
									<CardTitle>Budget Constraints</CardTitle>
								</div>
								<CardDescription>
									Hiring a full-time senior dev team is expensive, and your
									budget is tight.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-destructive/10 rounded-lg">
										<HelpCircle className="h-6 w-6 text-destructive" />
									</div>
									<CardTitle>Feature Uncertainty</CardTitle>
								</div>
								<CardDescription>
									You're not sure which features are essential for launch and
									which can wait.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="h-full">
							<CardHeader>
								<div className="flex items-center gap-3 mb-2">
									<div className="p-2 bg-destructive/10 rounded-lg">
										<Code className="h-6 w-6 text-destructive" />
									</div>
									<CardTitle>Tech Stack Worries</CardTitle>
								</div>
								<CardDescription>
									You're worried about building on the wrong tech stack and
									having to start over in a year.
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
