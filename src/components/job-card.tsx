import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Briefcase, DollarSign } from 'lucide-react'
import { format } from 'date-fns'
import type { Job } from '@/app/actions/jobs'

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  console.log('JobCard received job:', job)
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 hover:border-l-blue-600">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
              <Link href={`/careers/${job.id}`} className="hover:underline">
                {job.title || 'No title'}
              </Link>
            </CardTitle>
            <CardDescription className="text-base font-medium text-gray-700">
              {job.department || 'No department'}
            </CardDescription>
          </div>
          {job.salary && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 hover:bg-green-200">
              <DollarSign className="w-3 h-3 mr-1" />
              {job.salary}
            </Badge>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {job.location}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Briefcase className="w-3 h-3" />
            {job.type}
          </Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {job.level}
          </Badge>
        </div>
        
        <p className="text-gray-600 line-clamp-3 leading-relaxed">
          {job.description}
        </p>
        
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-gray-500">
            Posted {format(new Date(job.postedDate), 'MMM d, yyyy')}
          </span>
          <Link 
            href={`/careers/${job.id}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
          >
            View Details →
          </Link>
        </div>
      </CardContent>
    </Card>
  )
} 