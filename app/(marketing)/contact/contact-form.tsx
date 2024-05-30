"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { toast } from "@/components/ui/use-toast"
import { Label } from "@/components/ui/label"
import { ContactFormVales, ContactSchema } from "@/schemas"
import { startTransition } from "react"
import { sendEmail } from "@/actions/contact"
import { getDictionary } from "@/lib/dictionary"

const defaultValues: ContactFormVales = {
  firstname: "",
  lastname: "",
  email: "",
  company: "",
  message: "",
  terms: false,
  phone: "",
  subject: ""
}

interface ContactFormProps {
  dictionary: Awaited<ReturnType<typeof getDictionary>>["contact"]
}

export const ContactForm = ({ dictionary }: ContactFormProps) => {
  const { form: formDic } = dictionary

  const form = useForm<ContactFormVales>({
    resolver: zodResolver(ContactSchema),
    defaultValues
  })

  const handleSubmit = (data: ContactFormVales) => {
    startTransition(() => {
      sendEmail(data)
        .then((data) => {
          const { success, error } = data
          if (success) {
            toast({
              title: "Thanks for your message!",
              duration: 5000
            })
          }
          if (error) {
            toast({
              title: error,
              variant: "destructive"
            })
          }
        })
        .finally(() => {
          form.reset(defaultValues)
        })
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto mt-16 w-4/5 sm:mt-16 space-y-3">
        <h2 className="font-bold tracking-tight sm:text-xl">{formDic.title}</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel htmlFor="firstname">{formDic.firstname}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastname"
            render={({ field, formState }) => (
              <FormItem>
                <FormLabel htmlFor="lastname">{formDic.lastname}</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel htmlFor="email">{formDic.email}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="company"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel htmlFor="company">{formDic.company}</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="message"
              render={({ field, formState }) => (
                <FormItem>
                  <FormLabel htmlFor="message">{formDic.message}</FormLabel>
                  <FormControl>
                    <Textarea placeholder={formDic.messagePlaceholder} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <FormField
              control={form.control}
              name="terms"
              render={({ field, formState }) => (
                <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>

                  <Label htmlFor="terms" className="font-semibold leading-6">
                    {formDic.policyCheck.agree}{" "}
                    <Link href={"/privacy-policy"} className="font-extrabold underline underline-offset-4">
                      {formDic.policyCheck.policyLink}
                    </Link>
                  </Label>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type={"submit"} variant="default" className="sm:col-span-2">
            {formDic.submitButton}
          </Button>
        </div>
      </form>
    </Form>
  )
}
