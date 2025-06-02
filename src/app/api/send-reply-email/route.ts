import { ContactEmailRequest } from '@/@types/email';
import ContactTemplateEmail from '@/components/emails/contact-template';

import { resendApiKey } from '@/lib/resend';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const {name, email }: ContactEmailRequest = await request.json();

    const { data, error } = await resendApiKey.emails.send({
      from: "Coderaw.io <comercial@coderaw.io>",
      to: [email],
      subject: "Contato",
      react: ContactTemplateEmail({ name: name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
