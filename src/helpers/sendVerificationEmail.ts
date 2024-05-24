import { resend } from "../lib/resend";
import VerificationEmail from "../../emails/verificationTemplate";
import { ApiResponce } from '../types/ApiResponce';

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponce> {
    try {
        console.log(email);
        
        const { error } = await resend.emails.send({
            from:  'Acme <onboarding@resend.dev>',
            to: email,
            subject: 'Mystry message || Verification Code',
            react: VerificationEmail({ username, otp: verifyCode }),
        });

        if (error) {
            console.log('Error sending verification email:', error);
            return {
                success: false,
                message: 'Failed to send verification email'
            };
        } else {
            console.log('Verification email sent successfully');
            return {
                success: true,
                message: 'Verification email sent successfully'
            };
        }
    } catch (emailError) {
        console.log('Error sending verification email:', emailError);
        return {
            success: false,
            message: 'Failed to send verification email'
        };
    }
}
