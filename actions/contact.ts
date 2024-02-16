"use server";

import {ContactFormVales, ContactSchema} from "@/schemas";
import {sendContactEmail} from "@/lib/mail";

export const sendEmail = async (formData: ContactFormVales) => {

    try {
        const validateFields = ContactSchema.safeParse(formData);

        if (!validateFields.success) {
            return {
                error: validateFields.error.message
            }
        }

        const {data, error} = await sendContactEmail(formData);


        if (data) {
            return {
                success: "Email sent successfully"
            }
        }

        if (error) {
            console.error(error);
            return {
                error: `Error sending email: ${error.message}`
            }
        }

        return {
            error: "Something went wrong. Please try again later."
        }

    } catch (error) {
        return {
            error: "Something went wrong. Please try again later."
        }
    }
}