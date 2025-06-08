import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = 'noreply@revyosoftware.com';

interface SendEmailProps {
    to: string;
    subject: string;
    body: React.ReactNode;
}

export const sendEmail = async ({ to, subject, body }: SendEmailProps) => {
    try {
        await resend.emails.send({
          from: FROM_EMAIL,
          to: to,
          subject: subject,
          react: body
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
