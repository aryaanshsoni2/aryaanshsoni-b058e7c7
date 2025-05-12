
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend('re_fR4Tw8N6_EQmfWKX28KFZep6iJyZV1GpQ');

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  const { name, email, message } = data;
  
  try {
    // Send email to site owner
    const ownerEmailResponse = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'saryaansh@gmail.com', // Your email
      subject: `New contact message from ${name}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to user
    const userEmailResponse = await resend.emails.send({
      from: 'Aryaansh Soni <onboarding@resend.dev>',
      to: email,
      subject: 'Thank you for your message',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>Thank you for contacting me. I've received your message and will get back to you as soon as possible.</p>
        <p>Here's a copy of your message:</p>
        <p><em>${message}</em></p>
        <p>Best regards,</p>
        <p>Aryaansh Soni</p>
      `,
    });

    return { 
      success: true, 
      ownerEmailId: ownerEmailResponse.data?.id,
      userEmailId: userEmailResponse.data?.id
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}
