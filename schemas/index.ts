import * as z from "zod";

export const ContactSchema = z.object({
    firstname: z.string().min(2, "First name is too short").max(50, "First name is too long"),
    lastname: z.string().min(2, "Last name is too short").max(50, "Last name is too long"),
    email: z.string().email("Invalid email"),
    message: z.string().min(10, "Message is too short").max(500, "Message is too long"),
    terms: z.boolean().refine(value => value, {message: "You must agree to our privacy policy"}),
    phone: z.optional(z.string().max(20, "Phone number is too long")),
    company: z.optional(z.string().max(50, "Company name is too long")),
    subject: z.optional(z.string().max(50, "Subject is too long")),
});

export type ContactFormVales = z.infer<typeof ContactSchema>;