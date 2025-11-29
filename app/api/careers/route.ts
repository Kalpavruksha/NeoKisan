import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const phone = formData.get('phone') as string
    const position = formData.get('position') as string
    const experience = formData.get('experience') as string
    const message = formData.get('message') as string
    const resume = formData.get('resume') as File | null

    // Validate required fields
    if (!name || !email || !phone || !position || !experience || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Convert file to buffer
    const resumeBuffer = Buffer.from(await resume.arrayBuffer())
    const resumeFilename = resume.name

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'neokisaninnovations@gmail.com',
      replyTo: email,
      subject: `Career Application: ${position} - ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        ${message ? `<p><strong>Cover Letter:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>` : ''}
      `,
      attachments: [
        {
          filename: resumeFilename,
          content: resumeBuffer,
        },
      ],
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending application:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

