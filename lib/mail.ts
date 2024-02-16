import { Resend } from "resend";
import {ContactFormVales} from "@/schemas";

const resend = new Resend(process.env.RESEND_API_KEY)

const emailTemplate = (formData: ContactFormVales) => {
    return `
    <div style="font-family: 'Arial', sans-serif; color: #333;">
        <div style="text-align: center; background: linear-gradient(90deg, #80c6ff, #6c51f4);
        padding: 10px 0;">
            <h1 style="margin: 0; color: #fff;">Contact Form Submission</h1>
        </div>

        <div style="padding: 20px;">
            <h2 style="color: #f32782;">Hello, ${formData.firstname} ${formData.lastname}</h2>
            <p>Thank you for reaching out to us. We have received your message and will get back to you as soon as possible. Below is a copy of your submission for your records.</p>

            <div style="background-color: #f2f2f2; padding: 15px; margin-top: 20px; border-left: 5px solid #f32782;">
                <p><strong>First Name:</strong> ${formData.firstname}</p>
                <p><strong>Last Name:</strong> ${formData.lastname}</p>
                <p><strong>Company:</strong> ${formData.company}</p>
                <p><strong>Email:</strong> ${formData.email}</p>
                <p><strong>Pone Number:</strong> ${formData.phone}</p>
                <p><strong>Message:</strong><br/> ${formData.message}</p>
            </div>

            <p>If you have any further questions or comments, feel free to reply to this email.</p>

            <p style="margin-top: 40px; font-size: 0.9em; text-align: center;">© ${new Date().getFullYear()} Carboit. All rights reserved.</p>
        </div>
    </div>
    `;
}
export const sendContactEmail = async (formData: ContactFormVales) => {
    return await resend.emails.send({
        from: "Carboit <mail@carboit.com>",
        to: [formData.email],
        subject: formData.subject || "Re:contact form submission",
        html: emailTemplate(formData)
    })
}