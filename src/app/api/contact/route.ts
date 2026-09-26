import { NextResponse } from 'next/server';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mqenkryn';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, contact, phone, service, projectType, budget, timeline, message, projectDescription } = body;

    const senderEmail = email || '';
    const senderName = name || '';
    const senderMessage = message || projectDescription || '';

    // Forward payload to Formspree endpoint
    const formspreeResponse = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: senderName,
        email: senderEmail,
        contact: contact || phone || '',
        company: company || '',
        service: service || projectType || 'Branding',
        message: senderMessage,
        budget: budget || '',
        timeline: timeline || '',
      }),
    });

    if (formspreeResponse.ok) {
      return NextResponse.json({ success: true, message: 'Message successfully sent.' });
    }

    const data = await formspreeResponse.json().catch(() => null);
    return NextResponse.json(
      { success: false, errors: data?.errors || ['Submission failed'] },
      { status: formspreeResponse.status }
    );
  } catch (error) {
    console.error('[Contact API Error]:', error);
    return NextResponse.json(
      { success: false, message: 'Unexpected error sending message' },
      { status: 500 }
    );
  }
}
