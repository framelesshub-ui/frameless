import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, phone, projectType, budgetRange, projectDescription } = body;

    // Validation
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        {
          success: false,
          message: 'Missing required fields: name, email, and projectDescription are mandatory.',
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid email address provided.',
        },
        { status: 400 }
      );
    }

    const enquiryRecord = {
      id: `enq_${Date.now()}`,
      receivedAt: new Date().toISOString(),
      name: name.trim(),
      company: (company || '').trim(),
      email: email.trim().toLowerCase(),
      phone: (phone || '').trim(),
      projectType: projectType || 'Branding',
      budgetRange: budgetRange || '₹5L – ₹15L',
      projectDescription: projectDescription.trim(),
      status: 'pending_review',
      metadata: {
        source: 'framelesshub.com',
        location: 'Chennai, India',
      },
    };

    // Log enquiry cleanly for dev & server inspection
    console.log('[Frameless Hub CRM] New Project Enquiry received:', enquiryRecord);

    /**
     * Plug-and-Play Integration Hooks:
     * 1. SendGrid / Resend email dispatch:
     *    await resend.emails.send({ ... });
     * 2. Slack / Discord notification webhook:
     *    await fetch(process.env.SLACK_WEBHOOK_URL, { body: JSON.stringify(...) });
     * 3. CRM sync (HubSpot, Notion, Airtable):
     *    await syncToHubspot(enquiryRecord);
     */

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been securely received by Frameless Hub studio leads.',
        enquiryId: enquiryRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Frameless Hub CRM Error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred while processing your brief. Please try again.',
      },
      { status: 500 }
    );
  }
}
