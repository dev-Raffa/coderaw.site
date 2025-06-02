import { LeadEmailRequest } from '@/@types/email';
import { LeadTemplateEmail } from '@/components/emails/lead-template';
import { resendApiKey } from '@/lib/resend';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {
      name, 
      email,
      company, 
      services,
      message
    }: LeadEmailRequest = await request.json();

    const { data, error } = await resendApiKey.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [
        "mattheuscontato17@gmail.com"
      ],
      subject: "Interesse nos serviços prestados",
      react: LeadTemplateEmail({
        name: name,
        email: email,
        company: company,
        services: services,
        message: message,
      }),
    });

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.log(error);
    return Response.json({ error }, { status: 500 });
  }
}
