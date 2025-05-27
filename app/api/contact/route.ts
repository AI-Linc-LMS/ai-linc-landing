import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, contactNumber, message } = body;

    // Validate the form data
    if (!name || !email || !contactNumber || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the submission
    console.log('Contact Form Submission:', {
      name,
      email,
      contactNumber,
      message,
      timestamp: new Date().toISOString(),
    });

    // In a real implementation, you would add code like this:
    /*
    // Using SendGrid or similar email service
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'your-email@example.com', // Change to your email
      from: 'no-reply@yourwebsite.com', // Change to your verified sender
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNumber}
        
        Message:
        ${message}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
} 