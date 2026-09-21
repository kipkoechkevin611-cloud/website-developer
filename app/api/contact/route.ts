import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const FROM_EMAIL = process.env.FROM_EMAIL || 'noreply@yourdomain.com';
const TO_EMAIL = process.env.TO_EMAIL || 'your-email@example.com';

// Simple in-memory rate limiter (for production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5;

  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count++;
  return true;
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      projectType,
      budget,
      timeline,
      description,
      existingWebsite,
      referenceWebsite,
      honeypot,
    } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Server-side validation
    if (!name || !email || !phone || !projectType || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Input length limits
    if (name.length > 100 || email.length > 100 || phone.length > 20) {
      return NextResponse.json(
        { error: 'Input too long' },
        { status: 400 }
      );
    }

    if (description.length > 2000) {
      return NextResponse.json(
        { error: 'Description too long' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedName = escapeHtml(name.trim());
    const sanitizedEmail = escapeHtml(email.trim());
    const sanitizedPhone = escapeHtml(phone.trim());
    const sanitizedProjectType = escapeHtml(projectType);
    const sanitizedBudget = budget ? escapeHtml(budget) : 'Not specified';
    const sanitizedTimeline = timeline ? escapeHtml(timeline) : 'Not specified';
    const sanitizedDescription = escapeHtml(description.trim());
    const sanitizedExistingWebsite = existingWebsite ? escapeHtml(existingWebsite.trim()) : 'Not provided';
    const sanitizedReferenceWebsite = referenceWebsite ? escapeHtml(referenceWebsite.trim()) : 'Not provided';

    // Send email
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `New Project Inquiry — ${sanitizedProjectType} — ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">NEW PROJECT INQUIRY</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">CLIENT</h3>
            <p><strong>Name:</strong> ${sanitizedName}</p>
            <p><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p><strong>Phone / WhatsApp:</strong> ${sanitizedPhone}</p>
          </div>
          
          <div style="margin: 20px 0; background: #f5f5f5; padding: 15px; border-radius: 5px;">
            <h3 style="color: #333; margin-top: 0;">PROJECT</h3>
            <p><strong>Project Type:</strong> ${sanitizedProjectType}</p>
            <p><strong>Budget:</strong> ${sanitizedBudget}</p>
            <p><strong>Timeline:</strong> ${sanitizedTimeline}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">PROJECT DETAILS</h3>
            <p style="white-space: pre-wrap; color: #555;">${sanitizedDescription}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">REFERENCE WEBSITE</h3>
            <p><strong>Existing Website:</strong> ${sanitizedExistingWebsite}</p>
            <p><strong>Reference Website:</strong> ${sanitizedReferenceWebsite}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #777; font-size: 12px;">
            <p>Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
