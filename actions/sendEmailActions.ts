"use server";
import { redirect } from "next/navigation";
import { Redirect } from "next";
import { Resend } from "resend";
import emailTemplate from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailActions = async (
    formData: FormData
): Promise<Redirect> => {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;
	
    const { data } = await resend.emails.send({
        from: `${email} <onboarding@resend.dev>`,
        to: ["mathqna.project@gmail.com"],
        subject: subject,
        react: emailTemplate({
            authorName: name,
            reviewText: message,
        }),
    });

    redirect("/contact");
};
