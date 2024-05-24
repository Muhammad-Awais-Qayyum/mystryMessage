'use client'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {format} from 'timeago.js'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from './ui/button'
import { X } from 'lucide-react'
import { Message } from '@/model/User'
import { useToast } from './ui/use-toast'
import axios, { AxiosError } from 'axios'
import { ApiResponce } from '@/types/ApiResponce'

type MessageCardProps = {
    message: Message;
    onMessageDelete: (messageId: string) => void

}

const MessageCard = ({ message, onMessageDelete }: MessageCardProps) => {
    const { toast } = useToast()
    const handleDelete = async () => {
        try {
            const responce = await axios.delete<ApiResponce>(`/api/delete-message/${message._id}`)
            toast({
                title: 'Message deleted',
                description: responce.data.message
            })
            onMessageDelete(message._id)
        } catch (error) {
            console.error('Error in delete of message')

            const axiosError = error as AxiosError<ApiResponce>;
            let errorMessage = axiosError.response?.data.message
            toast({
                title: 'Message deleted failed',
                description: errorMessage,
                variant: 'destructive'
            })
        }
    }
    return (
        <Card>
            <CardHeader className=' flex  h-20   flex-row justify-between items-center'>
                <CardTitle>{message.content}</CardTitle>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant='destructive'><X className=' w-5 h-5' /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                            This action cannot be undone. The message will be permanently deleted.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardHeader>
            <CardFooter>
              {format(message?.createdAt)}
            </CardFooter>
        </Card>

    )
}

export default MessageCard