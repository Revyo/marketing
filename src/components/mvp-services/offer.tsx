"use client";

import { scheduleMeeting } from "@/lib/scheduleMeeting";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Clock, DollarSign, Star, Zap } from "lucide-react";

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

					<Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 via-background to-primary/5 border-2 border-primary/20 shadow-lg">
						<CardHeader className="text-center pb-4">
							<div className="flex items-center justify-center gap-2 mb-4">
								<Star className="h-6 w-6 text-yellow-500 fill-current" />
								<Badge variant="secondary" className="text-sm font-semibold">
									FOUNDER'S SPECIAL
								</Badge>
								<Star className="h-6 w-6 text-yellow-500 fill-current" />
							</div>
							<CardTitle className="text-2xl md:text-3xl font-bold text-primary mb-2">
								MVP Launchpad Package
							</CardTitle>
							<CardDescription className="text-base text-muted-foreground">
								Everything you need to launch your startup
							</CardDescription>
						</CardHeader>

						<Separator className="mx-6" />

						<CardContent className="pt-6">
							<div className="text-center mb-6">
								<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
									$18,000
								</div>
								<p className="text-muted-foreground">
									One-time investment • No hidden fees
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
								<div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border">
									<Clock className="h-4 w-4 text-primary flex-shrink-0" />
									<span className="text-sm font-medium">90-Day Delivery</span>
								</div>
								<div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border">
									<DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
									<span className="text-sm font-medium">Fixed Price</span>
								</div>
								<div className="flex items-center gap-2 p-3 bg-background/50 rounded-lg border">
									<Zap className="h-4 w-4 text-primary flex-shrink-0" />
									<span className="text-sm font-medium">Full Ownership</span>
								</div>
							</div>

							<div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
								<div className="flex items-center gap-2 justify-center">
									<Clock className="h-4 w-4 text-destructive" />
									<Badge variant="destructive" className="text-sm font-semibold">
										LIMITED AVAILABILITY
									</Badge>
								</div>
							</div>

							<Button
								size="lg"
								className="w-full text-lg py-6 cursor-pointer"
								onClick={scheduleMeeting}
							>
								Book Your Free Strategy Call
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							
							<p className="text-xs text-muted-foreground mt-3 text-center">
								30-minute call • No commitment required • Free MVP blueprint
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
