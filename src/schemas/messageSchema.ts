import { z } from 'zod'


export const messageSchema = z.object({
    content: z.string()
        .min(10, 'Content must be atleast 10 Character')
        .max(300, 'Content must be no longer than 300 Character')


})