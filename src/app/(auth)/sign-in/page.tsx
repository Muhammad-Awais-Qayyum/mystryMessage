'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Link from 'next/link'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { signInSchema } from '@/schemas/signInSchema'
import { signIn } from 'next-auth/react'



const Page = () => {
    const { toast } = useToast()
    const router = useRouter()

    // zod implementation

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            identifier: '',
            password: ''
        }

    })


    const onSubmit = async (data: z.infer<typeof signInSchema>) => {
        const result = await signIn('credentials', {
            redirect: false,
            identifier: data.identifier,
            password: data.password,
        })
        if (result?.error) {
            toast({
                title: 'Login Failed',
                description: 'Incorrect username or password',
                variant: 'destructive'
            })
        }

        if (result?.url) {
            router.replace('/dashboard')
        }
    }



    return (
        <div style={{fontFamily:'cursive' }} className=' flex  justify-center items-center  min-h-screen bg-gray-100'>
            <div className=' w-full  max-w-md space-y-8  p-8 bg-white rounded-lg shadow-md'>
                <div className=' text-center text-2xl font-semibold'>
                    Join Mystery Message
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="identifier"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email/Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Email/Username" {...field} />


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
                                        <Input type='password' placeholder="Enter Password" {...field} />


                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">
                            SignIn
                        </Button>
                    </form>
                </Form>

                <div className=' text-center'>
                    <p>

                        If you do not have an account?
                        <Link href={'/sign-up'} className=' text-blue-700 hover:text-blue-800 pl-1'>
                            SignUp
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page