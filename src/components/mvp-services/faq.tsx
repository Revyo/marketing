import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

					<div className="space-y-6">
						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-2 text-primary" />
									Who owns the intellectual property and code?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									You do. 100%. Upon final payment, we transfer all code and IP
									to you.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-2 text-primary" />
									What technology stack do you use?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									We select the best stack for your project's needs, focusing on
									scalability and performance. Our go-to technologies include
									Next.js, React.js, Node.js, and PostgreSQL, hosted on AWS or
									Vercel.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-2 text-primary" />
									What happens if I need more features after the MVP is built?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									We'd love to be your long-term tech partner! We can transition
									to a flexible monthly retainer or a new project-based
									agreement to continue building out your application.
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="flex items-center">
									<CheckCircle className="h-5 w-5 mr-2 text-primary" />
									Why is this offer so affordable?
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">
									We've streamlined our process for MVPs to be incredibly
									efficient with a combination of AI and human expertise. We're
									offering this special rate because we believe in building
									long-term relationships with promising startups. When you
									succeed, we succeed.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
