"use client";

import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { scheduleMeeting } from "@/lib/scheduleMeeting";

export default function HeroSection() {
	return (
		<section className="relative py-20 md:py-32 bg-gradient-to-br from-background to-muted/20 overflow-hidden">
			{/* Subtle geometric background elements */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl" />
				<div className="absolute top-1/4 right-20 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-lg rotate-45 blur-lg" />
				<div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl" />
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="text-center max-w-4xl mx-auto">
					<Badge variant="secondary" className="mb-6">
						Special Limited Offer
					</Badge>

					<h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
						Turn Your Big Idea into a{" "}
						<span className="text-primary">Market-Ready MVP</span> in 30 Days
					</h1>

					<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
						A special, limited-time offer for ambitious founders. We build the
						high-quality, scalable app you need to validate your vision, attract
						users, and secure funding—at a price that respects your runway.
					</p>

					<Button size="lg" className="text-lg px-8 cursor-pointer" onClick={scheduleMeeting}>
						Get Your Free MVP Blueprint
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>

					<p className="text-sm text-muted-foreground mt-4">
						Trusted by founders from innovative startups
					</p>
				</div>
			</div>
		</section>
	);
}
