'use client'
import React, { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import Link from 'next/link'
import { useDebounceCallback } from 'usehooks-ts'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { signUpSchema } from '@/schemas/signUpSchema'
import axios, { AxiosError } from 'axios'
import { ApiResponce } from '@/types/ApiResponce'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'



const Page = () => {
    const [username, setUsername] = useState('')
    const [usernamemessage, setUsernameMessage] = useState('')
    const [isCheckingUsername, setIsCheckingUsername] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const debounced = useDebounceCallback(setUsername, 300)
    const { toast } = useToast()
    const router = useRouter()

    // zod implementation

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }

    })

    useEffect(() => {
        const checkUsernameUnique = async () => {
            if (username) {
                setIsCheckingUsername(true)
                setUsernameMessage('')
                try {
                    const responce = await axios.get(`/api/check-username-unique?username=${username}`)


                    setUsernameMessage(responce.data.message)
                } catch (error) {
                    const axiosError = error as AxiosError<ApiResponce>;
                    setUsernameMessage(axiosError.response?.data.message ?? 'Error checking username')
                } finally {
                    setIsCheckingUsername(false)
                }


            }
        }
        checkUsernameUnique()
    }, [username])

    const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
        setIsSubmitting(true)
        try {
            const response = await axios.post<ApiResponce>('/api/sign-up', data)
            if (response.data.success) {
                toast({
                    title: 'Success',
                    description: response.data.message
                });
                router.replace(`/verify/${username}`);
            }
            setIsSubmitting(false);
        } catch (error) {
            console.error('Error in signup of user')

            const axiosError = error as AxiosError<ApiResponce>;
            let errorMessage = axiosError.response?.data.message
            toast({
                title: 'SignUp failed',
                description: errorMessage,
                variant: 'destructive'
            })
            setIsSubmitting(false)
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
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Username</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter username" {...field}
                                            onChange={(e) => {
                                                field.onChange(e)
                                                debounced(e.target.value)
                                            }}
                                        />
                                    </FormControl>
                                    {
                                        isCheckingUsername && <Loader2 className=' animate-spin' />
                                    }

                                    <p className={` text-sm ${usernamemessage === 'Username is unique' ? ' text-green-500' : ' text-red-500'}`}>
                                        {usernamemessage}
                                    </p>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter Email" {...field} />


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
                        <Button type="submit" disabled={isSubmitting}>
                            {
                                isSubmitting ? (
                                    <>
                                        <Loader2 className=' mr-2 h-4 w-4 animate-spin' /> Please Wait
                                    </>
                                ) : (
                                    'SignUp'
                                )
                            }
                        </Button>
                    </form>
                </Form>

                <div className=' text-center'>
                    <p>
                        Already have an account?
                        <Link href={'/sign-in'} className=' text-blue-700 hover:text-blue-800 pl-1'>
                            SignIn
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Page