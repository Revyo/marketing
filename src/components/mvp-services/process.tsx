import { Eye, Hammer, Phone, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function Process() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<Badge variant="outline" className="mb-4">
							Our Process
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							From Idea to Launch in 4 Simple Steps
						</h2>
					</div>

					<div className="space-y-8">
						<Card className="p-6">
							<div className="flex items-start space-x-6">
								<div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
									1
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-2 flex items-center">
										<Phone className="h-5 w-5 mr-2 text-primary" />
										Blueprint Call (Free)
									</h3>
									<p className="text-muted-foreground">
										Click the button below to book a free, no-obligation call.
										We'll discuss your vision and map out a potential MVP
										blueprint together.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6">
							<div className="flex items-start space-x-6">
								<div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
									2
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-2 flex items-center">
										<Eye className="h-5 w-5 mr-2 text-primary" />
										Design & Approve
									</h3>
									<p className="text-muted-foreground">
										Our team creates the UI/UX designs and interactive
										prototypes. You provide feedback until you're 100% happy.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6">
							<div className="flex items-start space-x-6">
								<div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
									3
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-2 flex items-center">
										<Hammer className="h-5 w-5 mr-2 text-primary" />
										Build & Review
									</h3>
									<p className="text-muted-foreground">
										We get to work building your app. You'll get regular updates
										and can review progress on a private staging server.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6">
							<div className="flex items-start space-x-6">
								<div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
									4
								</div>
								<div className="flex-1">
									<h3 className="text-xl font-semibold mb-2 flex items-center">
										<Target className="h-5 w-5 mr-2 text-primary" />
										Launch & Learn
									</h3>
									<p className="text-muted-foreground">
										We deploy your MVP and hand over the keys. It's time to get
										user feedback and start iterating!
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
