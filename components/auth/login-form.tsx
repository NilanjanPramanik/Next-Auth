"use client"

import * as z from "zod"

import { useForm } from "react-hook-form"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { useState, useTransition } from "react"

import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { CardWrapper } from "./card-wrapper"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { login } from "@/actions/login"


export const LoginForm = () => {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>()
    const [success, setSuccess] = useState<string | undefined>()

    const searchParam = useSearchParams();
    const urlError = searchParam.get("error") === "OAuthAccountNotLinked"
        ?
        "Email already is in use with different provider"
        : "";

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")
        // console.log(values)
        startTransition(() => {
            login(values)
                .then((data) => {
                    setError(data?.error);
                    setSuccess(data?.success)
                })
        })
    }

    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have and account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className=" space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="john.doe@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <Button
                                        size="sm"
                                        variant="link"
                                        className=" px-0 font-normal"
                                    >
                                        <Link href="/auth/reset">
                                            Forgot password
                                        </Link>
                                    </Button>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormError messege={error || urlError} />
                    <FormSuccess messege={success} />
                    <Button
                        disabled={isPending}
                        type="submit"
                        className="w-full"
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}