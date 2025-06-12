import { Shield, TrendingUp, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Solution() {
	return (
		<section className="py-20 bg-muted/30">
			<div className="container mx-auto px-4">
				<div className="max-w-4xl mx-auto text-center">
					<Badge variant="outline" className="mb-4">
						The Solution
					</Badge>
					<h2 className="text-3xl md:text-4xl font-bold mb-6">
						The MVP Launchpad: Your Shortcut to Market Validation
					</h2>
					<p className="text-xl text-muted-foreground mb-8 leading-relaxed">
						Stop worrying and start building. Our MVP Launchpad offer is a
						fixed-scope, fixed-price package designed to get your core product
						into the hands of real users, fast.
					</p>
					<p className="text-lg text-muted-foreground mb-12">
						We combine strategic consulting with expert development to build an
						MVP that is not just functional, but foundational.
					</p>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						<div className="text-center">
							<div className="p-4 bg-primary/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Zap className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">Speed to Market</h3>
							<p className="text-muted-foreground">Launch in 30 Days.</p>
						</div>

						<div className="text-center">
							<div className="p-4 bg-primary/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Shield className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">Cost Certainty</h3>
							<p className="text-muted-foreground">One transparent price.</p>
						</div>

						<div className="text-center">
							<div className="p-4 bg-primary/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<Users className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">Expert Guidance</h3>
							<p className="text-muted-foreground">
								We craft your MVP blueprint.
							</p>
						</div>

						<div className="text-center">
							<div className="p-4 bg-primary/10 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center">
								<TrendingUp className="h-8 w-8 text-primary" />
							</div>
							<h3 className="font-semibold mb-2">Built to Scale</h3>
							<p className="text-muted-foreground">
								Built on a modern, scalable foundation.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
