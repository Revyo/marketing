'use server'
import { z } from 'zod'
import Airtable from 'airtable'

const airtable = new Airtable({
  apiKey: process.env.AIRTABLE_API_KEY,
})

if (!process.env.AIRTABLE_BASE_ID) {
  throw new Error('AIRTABLE_BASE_ID is not set')
}

const base = airtable.base(process.env.AIRTABLE_BASE_ID)

const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  organization: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
})

export async function submitContactForm(formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    organization: formData.get('organization'),
    projectType: formData.get('projectType'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { firstName, lastName, email, organization, projectType, message } = validatedFields.data

  // Basic validation
  if (!firstName || !lastName || !email || !message) {
    return {
      success: false,
      errors: {
        firstName: 'First name is required',
        lastName: 'Last name is required',
        email: 'Invalid email address',
        message: 'Message is required',
      },
    }
  }

  // Email validation
  if (!z.string().email().safeParse(email).success) {
    return {
      success: false,
      errors: {
        email: 'Please enter a valid email address',
      },
    }
  }

  try {
    console.log('Attempting to create Airtable record with data:', {
      'First Name': firstName,
      'Last Name': lastName,
      'Email': email,
      'Organization': organization,
      'Project Type': projectType,
      'Message': message,
    })

    const records = await base('Website Contacts').create([
      {
        fields: {
          'First Name': firstName,
          'Last Name': lastName,
          'Email': email,
          'Organization': organization,
          'Project Type': projectType,
          'Message': message,
        },
      },
    ])

    console.log('Contact form submitted successfully:', records)
    return { success: true, message: 'Message sent successfully! We\'ll get back to you within 24 hours.' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    } else {
      console.error('Unknown error type:', error)
    }
    return {
      success: false,
      error: 'Failed to submit form. Please try again.',
    }
  }
}