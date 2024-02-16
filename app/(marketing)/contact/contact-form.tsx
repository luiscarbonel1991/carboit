"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import {Button} from "@/components/ui/button"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage,} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import Link from "next/link";
import {toast} from "@/components/ui/use-toast";
import {Label} from "@/components/ui/label";
import {ContactFormVales, ContactSchema} from "@/schemas";
import {startTransition} from "react";
import {sendEmail} from "@/actions/contact";

const defaultValues: ContactFormVales = {
    firstname: "",
    lastname: "",
    email: "",
    company: "",
    message: "",
    terms: false,
    phone: "",
    subject: "",
}
export const ContactForm = () => {

    const form = useForm<ContactFormVales>({
        resolver: zodResolver(ContactSchema),
        defaultValues,
    })

    const handleSubmit = (data: ContactFormVales) => {
        startTransition(() => {
            sendEmail(data)
                .then(data => {
                    const {success, error} = data
                    if (success) {
                        toast({
                            title: "Thanks for your message!",
                            duration: 5000,
                        })
                    }
                    if (error) {
                        toast({
                            title: error,
                            variant: "destructive",
                        })
                    }
                }).finally(() => {
                form.reset(defaultValues)
            })
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto mt-16 w-4/5 sm:mt-16 space-y-3">
                <h2 className="font-bold tracking-tight sm:text-xl">Work inquires</h2>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="firstname"
                        render={({field, formState}) => (
                            <FormItem>
                                <FormLabel htmlFor="firstname">First name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="lastname"
                        render={({field, formState}) => (
                            <FormItem>
                                <FormLabel htmlFor="lastname">Last name</FormLabel>
                                <FormControl>
                                    <Input {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    <div className="sm:col-span-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field, formState}) => (
                                <FormItem>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <FormField
                            control={form.control}
                            name="company"
                            render={({field, formState}) => (
                                <FormItem>
                                    <FormLabel htmlFor="company">Company</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({field, formState}) => (
                                <FormItem>
                                    <FormLabel htmlFor="message">Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Type your message here." {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="sm:col-span-2">
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({field, formState}) => (
                                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>

                                    <Label htmlFor="terms" className="font-semibold leading-6">
                                        I agree with your{' '}
                                        <Link href={"/privacy-policy"}
                                              className="font-extrabold underline underline-offset-4">
                                            privacy policy
                                        </Link>
                                    </Label>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>

                    <Button type={"submit"} variant="default" className="sm:col-span-2">
                        Let's talk
                    </Button>
                </div>
            </form>
        </Form>
    )
}
