"use client";

import { useState, useEffect } from "react";
import { JobCard } from "@/components/job-card";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Briefcase, Users, MapPin, AlertCircle } from "lucide-react";
import { getJobs, type Job } from "@/app/actions/jobs";

export default function Careers() {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchJobs() {
			try {
				const result = await getJobs();
				if (result.success && result.jobs) {
					setJobs(result.jobs);
				} else {
					setError(result.error || "Failed to fetch jobs");
				}
			} catch (err) {
				setError("An unexpected error occurred");
				console.error("Error fetching jobs:", err);
			} finally {
				setLoading(false);
			}
		}

		fetchJobs();
	}, []);

	return (
		<div className="min-h-screen bg-gray-50">
			<main className="pt-16">
				{/* Hero Section */}
				<section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Build Your Career with Revyo Software
							</h1>
							<p className="text-xl md:text-2xl mb-8 text-blue-100">
								Join our team of talented professionals working on cutting-edge
								software solutions for startups and government clients.
							</p>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
								<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
									<Briefcase className="w-8 h-8 mx-auto mb-3 text-blue-200" />
									<h3 className="font-semibold text-lg mb-2">
										Challenging Projects
									</h3>
									<p className="text-blue-100">
										Work on innovative solutions that make a real impact
									</p>
								</div>
								<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
									<Users className="w-8 h-8 mx-auto mb-3 text-blue-200" />
									<h3 className="font-semibold text-lg mb-2">
										Collaborative Team
									</h3>
									<p className="text-blue-100">
										Join a supportive team of experienced professionals
									</p>
								</div>
								<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
									<MapPin className="w-8 h-8 mx-auto mb-3 text-blue-200" />
									<h3 className="font-semibold text-lg mb-2">Flexible Work</h3>
									<p className="text-blue-100">
										Remote-first culture with flexible arrangements
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Job Listings Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Open Positions
							</h2>
							<p className="text-xl text-gray-600 max-w-2xl mx-auto">
								Discover opportunities to grow your career with us. We're always
								looking for talented individuals to join our team.
							</p>
						</div>

						{/* Loading State */}
						{loading && (
							<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
								<div className="lg:col-span-3 space-y-6">
									<Card>
										<CardContent className="p-6">
											<div className="flex justify-between items-start mb-4">
												<div>
													<Skeleton className="h-6 w-48 mb-2" />
													<Skeleton className="h-4 w-32" />
												</div>
												<Skeleton className="h-6 w-20" />
											</div>
											<div className="flex gap-2 mb-4">
												<Skeleton className="h-6 w-20" />
												<Skeleton className="h-6 w-24" />
												<Skeleton className="h-6 w-16" />
											</div>
											<Skeleton className="h-16 w-full mb-4" />
											<div className="flex justify-between">
												<Skeleton className="h-4 w-24" />
												<Skeleton className="h-4 w-20" />
											</div>
										</CardContent>
									</Card>
									<Card>
										<CardContent className="p-6">
											<div className="flex justify-between items-start mb-4">
												<div>
													<Skeleton className="h-6 w-48 mb-2" />
													<Skeleton className="h-4 w-32" />
												</div>
												<Skeleton className="h-6 w-20" />
											</div>
											<div className="flex gap-2 mb-4">
												<Skeleton className="h-6 w-20" />
												<Skeleton className="h-6 w-24" />
												<Skeleton className="h-6 w-16" />
											</div>
											<Skeleton className="h-16 w-full mb-4" />
											<div className="flex justify-between">
												<Skeleton className="h-4 w-24" />
												<Skeleton className="h-4 w-20" />
											</div>
										</CardContent>
									</Card>
									<Card>
										<CardContent className="p-6">
											<div className="flex justify-between items-start mb-4">
												<div>
													<Skeleton className="h-6 w-48 mb-2" />
													<Skeleton className="h-4 w-32" />
												</div>
												<Skeleton className="h-6 w-20" />
											</div>
											<div className="flex gap-2 mb-4">
												<Skeleton className="h-6 w-20" />
												<Skeleton className="h-6 w-24" />
												<Skeleton className="h-6 w-16" />
											</div>
											<Skeleton className="h-16 w-full mb-4" />
											<div className="flex justify-between">
												<Skeleton className="h-4 w-24" />
												<Skeleton className="h-4 w-20" />
											</div>
										</CardContent>
									</Card>
								</div>
							</div>
						)}

						{/* Error State */}
						{error && !loading && (
							<div className="max-w-2xl mx-auto">
								<Alert className="border-red-200 bg-red-50">
									<AlertCircle className="h-4 w-4 text-red-600" />
									<AlertDescription className="text-red-800">
										{error}
									</AlertDescription>
								</Alert>
							</div>
						)}

						{/* Job Listings */}
						{!loading &&
							!error &&
							(jobs.length === 0 ? (
								<div className="text-center py-12">
									<Briefcase className="w-16 h-16 mx-auto text-gray-400 mb-4" />
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										No openings at the moment
									</h3>
									<p className="text-gray-600 mb-6">
										We're not currently hiring, but we're always interested in
										connecting with talented professionals.
									</p>
									<p className="text-gray-600">
										Feel free to reach out at{" "}
										<a
											href="mailto:careers@revyosoftware.com"
											className="text-blue-600 hover:text-blue-800 underline"
										>
											careers@revyosoftware.com
										</a>
									</p>
								</div>
							) : (
								<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
									{/* Job Cards */}
									<div className="lg:col-span-3">
										<div className="space-y-6">
											<div className="flex justify-between items-center">
												<p className="text-gray-600">
													Showing {jobs.length} of {jobs.length} positions
												</p>
											</div>
											{jobs.map((job) => (
												<JobCard key={job.id} job={job} />
											))}
										</div>
									</div>
								</div>
							))}
					</div>
				</section>
			</main>
		</div>
	);
}
