import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
	title: "Project Showcase | Revyo Software",
	description: "Explore our portfolio of successful software projects delivered for startups and government clients. See our expertise in custom development, system integration, and digital solutions.",
	keywords: [
		"software portfolio",
		"project showcase",
		"client projects",
		"custom software examples",
		"case studies",
		"development portfolio",
		"software consulting projects"
	],
	alternates: {
		canonical: "https://revyosoftware.com/showcase"
	},
	openGraph: {
		title: "Project Showcase | Revyo Software",
		description: "Explore our portfolio of successful software projects delivered for startups and government clients.",
		url: "https://revyosoftware.com/showcase",
		type: "website",
		images: [
			{
				url: "/og-showcase.jpg",
				width: 1200,
				height: 630,
				alt: "Revyo Software Project Showcase"
			}
		]
	}
}

// Define the project type
interface Project {
	id: string
	title: string
	description: string
	longDescription: string
	technologies: string[]
	category: "Enterprise" | "Government" | "Startup" | "E-commerce" | "Healthcare"
	industry: string
	timeline: string
	image: string
	link?: string
	features: string[]
}

// Sample project data - you can replace this with your actual project
const projects: Project[] = [
	{
		id: "project-1",
		title: "VesselsPro",
		description: "An all-in-one vessel maintenance and management system for the maritime industry.",
		longDescription: "VesselsPro is a comprehensive vessel maintenance and management system designed to streamline operations for maritime companies. It provides a centralized platform for vessel maintenance, tracking, and management, allowing users to efficiently manage their fleet and ensure compliance with industry regulations.",
		technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Vercel"],
		category: "Enterprise",
		industry: "Maritime",
		timeline: "1 year",
		image: "/images/vessels.webp", // You'll need to add this image
        link: "https://www.vessels.pro",
		features: [
			"Fleet Management",
			"Vessel Maintenance",
			"Inventory Management",
			"Document Management",
			"Reporting and Analytics",
            "AI-powered dashboard"
		]
	}
]

export default function Showcase() {
	return (
		<div className="min-h-screen bg-background">
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 px-4 text-center">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
							Our <span className="text-primary">Project Showcase</span>
						</h1>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							Discover the innovative software solutions we've delivered for our clients. 
							Each project represents our commitment to excellence, innovation, and results.
						</p>
						<div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
							<span className="bg-secondary px-3 py-1 rounded-full">Custom Development</span>
							<span className="bg-secondary px-3 py-1 rounded-full">System Integration</span>
							<span className="bg-secondary px-3 py-1 rounded-full">Enterprise Solutions</span>
							<span className="bg-secondary px-3 py-1 rounded-full">Digital Transformation</span>
						</div>
					</div>
				</section>

				{/* Projects Grid */}
				<section className="py-20 px-4">
					<div className="max-w-6xl mx-auto">
						<h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
						
						{projects.length === 0 ? (
							// Empty state
							<div className="text-center py-16">
								<div className="bg-secondary rounded-lg p-12 max-w-2xl mx-auto">
									<h3 className="text-2xl font-semibold mb-4">Projects Coming Soon</h3>
									<p className="text-muted-foreground mb-6">
										We're currently working on exciting projects that will be showcased here. 
										Our team is dedicated to delivering exceptional software solutions.
									</p>
									<Link 
										href="/contact" 
										className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
									>
										Get in Touch
									</Link>
								</div>
							</div>
						) : (
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								{projects.map((project) => (
									<div key={project.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
										{/* Project Image */}
										<div className="aspect-video bg-secondary relative">
											{project.image ? (
												<Image
													src={project.image}
													alt={`${project.title} project screenshot`}
													fill
													className="object-cover"
												/>
											) : (
												<div className="flex items-center justify-center h-full text-muted-foreground">
													<div className="text-center">
														<div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
															<svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Project placeholder icon">
																<title>Project Placeholder</title>
																<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
															</svg>
														</div>
														<p className="text-sm">Project Screenshot</p>
													</div>
												</div>
											)}
										</div>

										{/* Project Content */}
										<div className="p-6">
											<div className="flex items-center justify-between mb-4">
												<span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
													{project.category}
												</span>
											</div>

											<h3 className="text-xl font-semibold mb-3">{project.title}</h3>
											<p className="text-muted-foreground mb-4">{project.description}</p>

											{/* Project Details */}
											<div className="space-y-3 mb-6">
												<div>
													<span className="text-sm font-medium">Industry: </span>
													<span className="text-sm text-muted-foreground">{project.industry}</span>
												</div>
												<div>
													<span className="text-sm font-medium">Timeline: </span>
													<span className="text-sm text-muted-foreground">{project.timeline}</span>
												</div>
											</div>

											{/* Technologies */}
											<div className="mb-6">
												<h4 className="text-sm font-medium mb-2">Technologies Used:</h4>
												<div className="flex flex-wrap gap-2">
													{project.technologies.map((tech) => (
														<span
															key={tech}
															className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs"
														>
															{tech}
														</span>
													))}
												</div>
											</div>

											{/* Key Features */}
											<div className="mb-6">
												<h4 className="text-sm font-medium mb-2">Key Features:</h4>
												<ul className="space-y-1">
													{project.features.map((feature) => (
														<li key={feature} className="text-sm text-muted-foreground flex items-start">
															<span className="text-primary mr-2">•</span>
															{feature}
														</li>
													))}
												</ul>
											</div>

											{/* CTA */}
											<div className="flex gap-3">
												{project.link && (
													<Link
														href={project.link}
                                                        target="_blank"
														className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm text-center hover:bg-primary/90 transition-colors"
													>
														View Website
													</Link>
												)}
												<Link
													href="/#contact"
													className="flex-1 border border-border px-4 py-2 rounded-md text-sm text-center hover:bg-secondary transition-colors"
												>
													Discuss Similar Projects
												</Link>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 px-4 bg-secondary/50">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
						<p className="text-xl text-muted-foreground mb-8">
							Let's discuss how we can help bring your software vision to life with our proven expertise.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								href="/#contact"
								className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
							>
								Start a Conversation
							</Link>
							<Link
								href="/#services"
								className="border border-border px-8 py-3 rounded-lg hover:bg-secondary transition-colors"
							>
								View Our Services
							</Link>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}