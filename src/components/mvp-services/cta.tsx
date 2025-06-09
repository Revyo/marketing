"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { scheduleMeeting } from "@/lib/scheduleMeeting";

export default function CTA() {
	return (
		<section className="py-20 bg-primary text-primary-foreground">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						Ready to Bring Your Vision to Life?
					</h2>
					<p className="text-xl mb-8 opacity-90">
						Your idea deserves more than a spot in a notebook. Let's build the
						MVP that will kickstart your journey.
					</p>

					<Button
						size="lg"
						variant="secondary"
						className="text-lg px-8 cursor-pointer"
						onClick={scheduleMeeting}
					>
						Get Your Free MVP Blueprint
						<ArrowRight className="ml-2 h-5 w-5" />
					</Button>

					<p className="text-sm mt-4 opacity-75">
						A 30-minute, no-pressure strategy call to see if we're a good fit.
					</p>
				</div>
			</div>
		</section>
	);
}
