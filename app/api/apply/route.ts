import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, contactNumber, graduationYear, isWorking, workDomain } = body;

    // Validate the form data
    if (!name || !email || !contactNumber || !graduationYear || !isWorking) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically send an email using a service like Nodemailer, SendGrid, etc.
    // For now, we'll just log the submission
    console.log('Application Form Submission:', {
      name,
      email,
      contactNumber,
      graduationYear,
      isWorking,
      workDomain: workDomain || 'Not specified',
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
      subject: `New application submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNumber}
        Year of Graduation: ${graduationYear}
        Currently Working: ${isWorking === 'yes' ? 'Yes' : 'No'}
        Work Domain: ${workDomain || 'Not specified'}
      `,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Year of Graduation:</strong> ${graduationYear}</p>
        <p><strong>Currently Working:</strong> ${isWorking === 'yes' ? 'Yes' : 'No'}</p>
        <p><strong>Work Domain:</strong> ${workDomain || 'Not specified'}</p>
      `,
    };
    
    await sgMail.send(msg);
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Application form error:', error);
    return NextResponse.json(
      { error: 'An error occurred while processing your request' },
      { status: 500 }
    );
  }
} 