import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { 
  MapPin, 
  Clock, 
  Briefcase, 
  DollarSign, 
  Calendar,
  ArrowLeft,
  Mail,
  CheckCircle,
  Users,
  Star
} from 'lucide-react'
import { format } from 'date-fns'
import { getJobById } from '@/app/actions/jobs'

interface JobPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const result = await getJobById(params.id)
  
  if (!result.success || !result.job) {
    return {
      title: 'Job Not Found | Revyo Software',
      description: 'The requested job posting could not be found.'
    }
  }

  const { job } = result
  
  return {
    title: `${job.title} - ${job.department} | Revyo Software Careers`,
    description: job.description.slice(0, 160),
    keywords: [
      job.title.toLowerCase(),
      job.department.toLowerCase(),
      job.location.toLowerCase(),
      'software jobs',
      'tech careers',
      'revyo software',
      job.type.toLowerCase()
    ],
    openGraph: {
      title: `${job.title} at Revyo Software`,
      description: job.description.slice(0, 160),
      type: 'website',
      url: `https://revyosoftware.com/careers/${job.id}`,
    },
    twitter: {
      card: 'summary',
      title: `${job.title} at Revyo Software`,
      description: job.description.slice(0, 160),
    }
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const result = await getJobById(params.id)
  
  if (!result.success || !result.job) {
    notFound()
  }

  const { job } = result

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumb and Back Navigation */}
        <section className="bg-white border-b">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Link 
                href="/careers"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Link>
            </div>
          </div>
        </section>

        {/* Job Header */}
        <section className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {job.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">
                    {job.department}
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-2 px-3 py-1">
                      <Clock className="w-4 h-4" />
                      {job.level}
                    </Badge>
                    {job.salary && (
                      <Badge variant="secondary" className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center text-gray-500 mb-8">
                    <Calendar className="w-4 h-4 mr-2" />
                    Posted {format(new Date(job.postedDate), 'MMMM d, yyyy')}
                  </div>
                </div>

                <div className="lg:w-80">
                  <Card className="border-2 border-blue-100">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg">Ready to Apply?</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <Button 
                        asChild
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        <a href={`mailto:careers@revyosoftware.com?subject=Application for ${job.title}&body=Hi, I'm interested in applying for the ${job.title} position. Please find my resume attached.`}>
                          <Mail className="w-4 h-4 mr-2" />
                          Apply Now
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Job Details */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Job Description */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Job Description
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose prose-gray max-w-none">
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {job.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Responsibilities */}
                {job.responsibilities?.trim() && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Key Responsibilities
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {job.responsibilities}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Requirements */}
                {job.requirements?.trim() && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="w-5 h-5" />
                        Requirements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {job.requirements}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Benefits */}
                {job.benefits?.trim() && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5" />
                        Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {job.benefits}
                      </p>
                    </CardContent>
                  </Card>
                )}

                {/* Job Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Job Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Department</p>
                      <p className="text-gray-900">{job.department}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Location</p>
                      <p className="text-gray-900">{job.location}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Employment Type</p>
                      <p className="text-gray-900">{job.type}</p>
                    </div>
                    <Separator />
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">Experience Level</p>
                      <p className="text-gray-900">{job.level}</p>
                    </div>
                    {job.salary && (
                      <>
                        <Separator />
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-1">Salary Range</p>
                          <p className="text-gray-900 font-medium text-green-700">{job.salary}</p>
                        </div>
                      </>
                    )}
                  </CardContent>
                </Card>

                {/* Apply Card */}
                <Card className="border-2 border-blue-100 bg-blue-50/50">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      Interested in this position?
                    </h3>
                    <Button 
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 mb-3"
                    >
                      <a href={`mailto:careers@revyosoftware.com?subject=Application for ${job.title}&body=Hi, I'm interested in applying for the ${job.title} position. Please find my resume attached.`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </a>
                    </Button>
                    <p className="text-xs text-gray-600">
                      We'll get back to you within 48 hours
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
} 