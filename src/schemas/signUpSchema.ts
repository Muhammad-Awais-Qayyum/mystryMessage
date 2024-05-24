import { z } from 'zod'



export const usernameValidation = z.string()
    .min(3, 'Username must be atleast 2 Character')
    .max(18, 'Username must be no more than 20 Character')
    .regex(/^[a-zA-Z0-9]+$/, ' Username must not contain special Character')




 export const signUpSchema = z.object({
    username: usernameValidation,
    password: z.string().min(6, 'Password must be atleast 6 Character'),
    email: z.string().email({ message: 'Invalid email address' }),
})