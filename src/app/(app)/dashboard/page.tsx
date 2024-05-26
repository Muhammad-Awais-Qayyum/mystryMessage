'use client'
import MessageCard from '@/components/MessageCard'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import { useToast } from '@/components/ui/use-toast'
import { Message } from '@/model/User'
import { acceptMessageSchema } from '@/schemas/acceptMessageSchema'
import { ApiResponce } from '@/types/ApiResponce'
import { zodResolver } from '@hookform/resolvers/zod'
import axios, { AxiosError } from 'axios'
import { Loader2, RefreshCcw } from 'lucide-react'
import { User } from 'next-auth'
import { useSession } from 'next-auth/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Page = () => {
  const [messages, SetMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSwitchLoading, setIsSwitchLoading] = useState(false)
  const [baseUrl, setBaseUrl] = useState('');


  const { toast } = useToast()

  const handleDeleteMessage = (messageId: string) => {
    SetMessages(messages.filter((message) => message._id !== messageId))
  }

  const { data: session } = useSession()
  const form = useForm({
    resolver: zodResolver(acceptMessageSchema)
  })

  const { register, watch, setValue } = form;
  const acceptMessage = watch('acceptMessages')

  const fetchAcceptMessage = useCallback(async () => {
    setIsSwitchLoading(true)
    try {
      const responce = await axios.get<ApiResponce>('/api/accept-message')
      setValue('acceptMessages', responce.data.isAcceptingMessages)
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponce>
      toast({
        title: 'Error',
        description: axiosError.response?.data.message || 'Failed to fetch',
        variant: 'destructive'
      })
    } finally {
      setIsSwitchLoading(false)
    }
  }, [setValue, toast, setIsSwitchLoading])

  const fetchMessage = useCallback(async (refresh: boolean = false) => {
    setIsLoading(true)
    setIsSwitchLoading(false)
    try {
      const responce = await axios.get('/api/get-messages')
      SetMessages(responce.data.messages || [])
      if (refresh) {
        toast({
          title: 'Refresh Messages',
          description: 'Showing latest Messages'
        })
      }
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponce>
      toast({
        title: 'Error',
        description: axiosError.response?.data.message || 'Failed to fetch',
        variant: 'destructive'
      })
    } finally {
      setIsLoading(false)
      setIsSwitchLoading(false)
    }
  }, [setIsLoading, SetMessages, setIsSwitchLoading, toast])

  useEffect(() => {
    if (!session || !session.user) return
    fetchMessage()
    fetchAcceptMessage()
  }, [session, setValue, fetchMessage, fetchAcceptMessage])

  // handle switch change

  const handleSwitchChange = async () => {
    try {
      const responce = await axios.post<ApiResponce>('/api/accept-message', {
        acceptMessage: !acceptMessage
      })
      setValue('acceptMessages', !acceptMessage)
      toast({
        title: responce.data.message,
        variant: 'destructive'
      })
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponce>
      toast({
        description: axiosError.response?.data.message || 'Failed to fetch',
        variant: 'destructive'
      })
    }
  }
  const username = session?.user?.username;
  useEffect(() => {
    setBaseUrl(`${window.location.protocol}://${window.location.host}`);
  }, []);

  const profileUrl = `${baseUrl}/u/${username}`;




  const copyToClipboard = () => {
    navigator.clipboard.writeText(profileUrl);
    toast({
      title: 'Copied to clipboard',
    });
  };
  if (!session || !session.user) {
    return <div>Please Login</div>
  }

  return (
    <div style={{ fontFamily: 'cursive' }} className="my-8 mx-4 md:mx-8 lg:mx-auto p-6 bg-white rounded w-full max-w-6xl">
      <h1 className="text-4xl font-bold mb-4">User Dashboard</h1>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Copy Your Unique Link</h2>{' '}
        <div className="flex items-center">
          <input
            type="text"
            value={profileUrl}
            disabled
            className="input input-bordered w-full p-2 mr-2"
          />
          <Button onClick={copyToClipboard}>Copy</Button>
        </div>
      </div>

      <div className="mb-4 flex">
        <Switch
          {...register('acceptMessages')}
          checked={acceptMessage}
          onCheckedChange={handleSwitchChange}
          disabled={isSwitchLoading}
        />
        <span className="ml-2">
          Accept Messages: {acceptMessage ? 'On' : 'Off'}
        </span>
      </div>
      <Separator />

      <Button
        className="mt-4"
        variant="outline"
        onClick={(e) => {
          e.preventDefault();
          fetchMessage(true);
        }}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <RefreshCcw className="h-4 w-4" />
        )}
      </Button>
      <div className="mt-4 w-4/5  grid grid-cols-1 md:grid-cols-2 gap-6">
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <MessageCard
              key={message._id}
              message={message}
              onMessageDelete={handleDeleteMessage}
            />
          ))
        ) : (
          <p>No messages to display.</p>
        )}
      </div>
    </div>
  )
}

export default Page