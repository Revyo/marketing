'use server'
import Airtable from 'airtable'

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
})

if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('AIRTABLE_BASE_ID is not set')
}

const base = airtable.base(process.env.AIRTABLE_BASE_ID)

export interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string // Full-time, Part-time, Contract
  level: string // Junior, Mid, Senior
  description: string
  requirements: string
  responsibilities: string
  benefits: string
  salary?: string
  postedDate: string
  isActive: boolean
}

export async function getJobs(): Promise<{ success: boolean; jobs?: Job[]; error?: string }> {
  try {
    const records = await base('Jobs').select({
      sort: [{ field: 'postedAt', direction: 'desc' }]
    }).all()

    const jobs: Job[] = records
      .map((record, index) => {
        const fields = record.fields as Record<string, unknown>

        // Debug logging for all records to see field names
        console.log(`Record ${index + 1} (${record.id}):`);
        console.log("Available fields:", Object.keys(fields));
        console.log("Field values:", fields);
        console.log("---");
        
        return {
          id: record.id,
          title: (fields.title as string) || '',
          department: (fields.department as string) || '',
          location: (fields.location as string) || '',
          type: (fields.type as string) || '',
          level: (fields.level as string) || '',
          description: (fields.description as string) || '',
          requirements: (fields.requirements as string) || '',
          responsibilities: (fields.responsibilities as string) || '',
          benefits: (fields.benefits as string) || '',
          salary: (fields.salary as string) || undefined,
          postedDate: (fields.postedAt as string) || new Date().toISOString(),
          isActive: Boolean(fields.isActive)
        }
      })
      .filter(job => {
        // Filter out records that don't have essential data (at least a title)
        return job.title.trim() !== '' && job.isActive
      })

    return { success: true, jobs }
  } catch (error) {
    console.error('Error fetching jobs from Airtable:', error)
    return {
      success: false,
      error: 'Failed to fetch job listings. Please try again later.',
    }
  }
}

export async function getJobById(id: string): Promise<{ success: boolean; job?: Job; error?: string }> {
  try {
    const record = await base('Jobs').find(id)
    const fields = record.fields as Record<string, unknown>

    if (!fields.isActive) {
      return {
        success: false,
        error: 'Job not found or not available.',
      }
    }

    const job: Job = {
      id: record.id,
      title: (fields.title as string) || '',
      department: (fields.department as string) || '',
      location: (fields.location as string) || '',
      type: (fields.type as string) || '',
      level: (fields.level as string) || '',
      description: (fields.description as string) || '',
      requirements: (fields.requirements as string) || '',
      responsibilities: (fields.responsibilities as string) || '',
      benefits: (fields.benefits as string) || '',
      salary: (fields.salary as string) || undefined,
      postedDate: (fields.postedAt as string) || new Date().toISOString(),
      isActive: Boolean(fields.isActive)
    }

    return { success: true, job }
  } catch (error) {
    console.error('Error fetching job by ID from Airtable:', error)
    return {
      success: false,
      error: 'Job not found.',
    }
  }
} 