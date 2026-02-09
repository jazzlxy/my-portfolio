import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Get form data (request - receiving request on server side)
    const { name, email, message } = await request.json();
    console.log("form data recevied:", { name, email, message });

    // Creating a transporter (send data)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // The 16-character App Password
      },
    });

    // Creating mail options (how send data looks)
    const mailOptions = {
      from: process.env.GMAIL_USER, //mask sender email to prevent GMAIL from identifying spoofing
      to: process.env.GMAIL_USER,
      replyTo: email, // allow me to reply to sender
      subject: `New message from ${name}`,
      text: `Name: ${name} Email: ${email} Message: ${message}`, // HTML takes precedence over text
      html: `<h2>New Contact Form Submission</h2> <p><strong>Name:</strong> ${name}</p> <p><strong>Email:</strong> ${email}</p> <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return Response.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (err) {
    console.error("Send email error", err);
    return Response.json(
      {
        success: false,
        message: "Error. Please try again later.",
      },
      { status: 500 },
    );
  }
}
