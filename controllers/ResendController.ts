"use server";

import { Resend } from "resend";
import { ProjectInquiry } from "@/types";

//initializing instance of Resend object
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);
console.log("Resend API key: ", RESEND_API_KEY);

const ResendController = async (data: ProjectInquiry) => {
  try {
    const resp = await resend.emails.send({
      from: "FROM_MY_PORTFOLIO_SITE <onboarding@resend.dev>", // Use this default domain for testing
      to: ["timilehin0303@gmail.com"], // Replace with your email for testing
      replyTo: data.email,
      subject: `New Inquiry from ${data.name} · (${data.organization})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px;">
            🚀 New Portfolio Message
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569; width: 120px;">Sender:</td>
              <td style="padding: 6px 0; color: #0f172a;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 6px 0; color: #2563eb;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Organization:</td>
              <td style="padding: 6px 0; color: #0f172a;">${data.organization}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Est. Budget:</td>
              <td style="padding: 6px 0; color: #16a34a; font-weight: 600;">${data.budget}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Purpose:</td>
              <td style="padding: 6px 0; color: #16a34a; font-weight: 600;">${data.type}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #475569;">Submitted at:</td>
              <td style="padding: 6px 0; color: #16a34a; font-weight: 600;">${data.submittedAt}</td>
            </tr>
          </table>

          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #6366f1;">
            <h4 style="margin: 0 0 8px 0; color: #475569;">Message:</h4>
            <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-top: 32px;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; margin: 0;">
            Sent automatically from your portfolio site contact form.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", resp);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    // throw new Error(
    //   error instanceof Error
    //     ? error.message
    //     : "failed to send message to email",
    // );
    return false;
  }
};

export default ResendController;
