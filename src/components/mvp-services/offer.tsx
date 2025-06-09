"use client";

import { scheduleMeeting } from "@/lib/scheduleMeeting";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ArrowRight } from "lucide-react";

export default function Offer() {
	return (
		<section className="py-20 bg-background">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					<Badge variant="outline" className="mb-4">
						Limited Time Offer
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Get Your MVP Built at a Founder-Friendly Price
					</h2>
					<p className="text-lg text-muted-foreground mb-8">
						Building a custom MVP of this quality typically costs upwards of
						$30,000. To help the next wave of innovators get off the ground,
						we're offering a limited number of Launchpad packages at a special
						rate.
					</p>

					<Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-background border-2 border-primary/20">
						<div className="mb-4">
							<span className="text-4xl md:text-5xl font-bold text-primary">
								Founder's Launchpad Offer: $18,000
							</span>
						</div>
						<p className="text-lg text-muted-foreground mb-6">
							A one-time investment to launch your startup
						</p>
						<Badge variant="destructive" className="text-lg px-4 py-2">
							Limited number of packages available
						</Badge>
					</Card>

					<div className="space-y-4">
						<Button
							size="lg"
							className="text-lg px-8"
							onClick={scheduleMeeting}
						>
							Book a Call to Learn More
							<ArrowRight className="ml-2 h-5 w-5 cursor-pointer" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
