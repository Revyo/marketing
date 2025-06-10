import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto">
					<div className="text-center mb-16">
						<Badge variant="outline" className="mb-4">
							FAQ
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Frequently Asked Questions
						</h2>
					</div>

					<Accordion type="single" collapsible className="w-full space-y-4">
						<AccordionItem value="item-1" className="bg-background rounded-lg border shadow-sm">
							<AccordionTrigger className="px-6 py-4 hover:no-underline">
								<div className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
									<span className="text-left font-semibold">
										Who owns the intellectual property and code?
									</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<p className="text-muted-foreground">
									You do. 100%. Upon final payment, we transfer all code and IP
									to you.
								</p>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-2" className="bg-background rounded-lg border shadow-sm">
							<AccordionTrigger className="px-6 py-4 hover:no-underline">
								<div className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
									<span className="text-left font-semibold">
										What technology stack do you use?
									</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<p className="text-muted-foreground">
									We select the best stack for your project's needs, focusing on
									scalability and performance. Our go-to technologies include
									Next.js, React.js, Node.js, and PostgreSQL, hosted on AWS or
									Vercel.
								</p>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-3" className="bg-background rounded-lg border shadow-sm">
							<AccordionTrigger className="px-6 py-4 hover:no-underline">
								<div className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
									<span className="text-left font-semibold">
										What happens if I need more features after the MVP is built?
									</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<p className="text-muted-foreground">
									We'd love to be your long-term tech partner! We can transition
									to a flexible monthly retainer or a new project-based
									agreement to continue building out your application.
								</p>
							</AccordionContent>
						</AccordionItem>

						<AccordionItem value="item-4" className="bg-background rounded-lg border shadow-sm">
							<AccordionTrigger className="px-6 py-4 hover:no-underline">
								<div className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-3 text-primary flex-shrink-0" />
									<span className="text-left font-semibold">
										Why is this offer so affordable?
									</span>
								</div>
							</AccordionTrigger>
							<AccordionContent className="px-6 pb-6">
								<p className="text-muted-foreground">
									We've streamlined our process for MVPs to be incredibly
									efficient with a combination of AI and human expertise. We're
									offering this special rate because we believe in building
									long-term relationships with promising startups. When you
									succeed, we succeed.
								</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</section>
	);
}
