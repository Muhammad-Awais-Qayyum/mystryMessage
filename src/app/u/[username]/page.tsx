'use client'
import { useParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useCompletion } from 'ai/react';
import * as z from "zod"
import { messageSchema } from '@/schemas/messageSchema'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import axios, { AxiosError } from 'axios'
import { ApiResponce } from '@/types/ApiResponce'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'
const Page = () => {
  const { username } = useParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const specialChar = '||';

const parseStringMessages = (messageString: string): string[] => {
  return messageString.split(specialChar);
};


  const initialMessageString =
    "What's your favorite movie?||Do you have any pets?||What's your dream job?";

  const form = useForm<z.infer<typeof messageSchema>>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      content: "",
    },
  })

  const messageContent = form.watch('content');

  const handleMessageClick = (message: string) => {
    form.setValue('content', message);
  };

  const {
    complete,
    completion,
    isLoading: isSuggestLoading,
    error,
  } = useCompletion({
    api: '/api/suggest-message',
    initialCompletion: initialMessageString,
  });

  const onSubmit = async (data: z.infer<typeof messageSchema>) => {
    try {
      setIsSubmitting(true)

      const response = await axios.post<ApiResponce>('/api/send-message', {
        ...data,
        username,
      });

      toast({
        title: 'Success',
        description: response.data.message,
        variant: 'default',
      });
      form.reset({ ...form.getValues(), content: '' });
    } catch (error) {
      console.error('Error in message sent')

      const axiosError = error as AxiosError<ApiResponce>;
      let errorMessage = axiosError.response?.data.message
      toast({
        title: 'Messsage Sent Failed',
        description: errorMessage,
        variant: 'destructive'
      })

    } finally {
      setIsSubmitting(false)
    }
  }

  const fetchSuggestedMessages = async () => {
    try {
      complete('');
    } catch (error) {
      console.error('Error fetching messages:', error);
      // Handle error appropriately
    }
  };

  return (
    <div style={{ fontFamily: 'cursive' }}>
      <h1 className=' text-center text-4xl mt-12 font-bold'>
        Public Profile Link
      </h1>
      <div className=' w-full px-3 md:px-0 md:w-[70%] mt-10  mx-auto'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="  space-y-8">
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Send Anonymous Message to @{username}</FormLabel>
                  <FormControl className=' h-20'>
                    <Input placeholder="write your anonymous message here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className=' flex justify-center'>
              <Button className='inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2' type="submit" disabled={isSubmitting || !messageContent}>
                {
                  isSubmitting ? (
                    <>
                      <Loader2 className=' mr-2 h-4 w-4 animate-spin' /> Please Wait
                    </>
                  ) : (
                    'Send It'
                  )
                }

              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full px-3 md:px-0 md:w-[70%]   mx-auto space-y-4 my-8">
        <div className="space-y-2">
          <Button
            onClick={fetchSuggestedMessages}
            className="my-4"
            disabled={isSuggestLoading}
          >
            Suggest Messages
          </Button>
          <p>Click on any message below to select it.</p>
        </div>
        <Card>
          <CardHeader>
            <h3 className="text-xl font-semibold">Messages</h3>
          </CardHeader>
          <CardContent className="      flex flex-col space-y-4">
            {error ? (
              <p className="text-red-500">{error.message}</p>
            ) : (
              parseStringMessages(completion).map((message, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="mb-2    "
                  onClick={() => handleMessageClick(message)}
                >
                   <span className=' truncate '>{message}</span>
                </Button>
              ))
            )}
          </CardContent>
        </Card>
      </div>
      <Separator className="my-6 w-[90%] px-3 md:px-0 md:w-[70%]   mx-auto" />
      <div className="text-center mb-6 ">
        <div className="mb-4">Get Your Message Board</div>
        <Link href={'/sign-up'}>
          <Button>Create Your Account</Button>
        </Link>
      </div>
    </div>
    
  )
}

export default Page