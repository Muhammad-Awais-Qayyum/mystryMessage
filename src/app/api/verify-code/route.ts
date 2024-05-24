import dbConnect from "@/lib/dbConnect";
import userModel from "@/model/User";





export async function POST(request: Request) {
    await dbConnect()
    try {
        const { username, code } = await request.json()


        const decodedUsername = decodeURIComponent(username)

        const user = await userModel.findOne({ username: decodedUsername })

        console.log(user);
        
        if (!user) {
            return Response.json({
                success: false,
                message: 'User not found'
            }, { status: 500 })
        }

        const iscodeValid = user.verifyCode === code
        const iscodeNotExpired = new Date(user.verifyCodeExpiry) > new Date()



        if (iscodeValid && iscodeNotExpired) {
            user.isVerified = true
            await user.save()
            return Response.json({
                success: true,
                message: 'User verified Successfully'
            }, { status: 200 })
        } else if (!iscodeNotExpired) {
            return Response.json({
                success: false,
                message: 'Verification code has expired.Please signup again and get a new Code.'
            }, { status: 500 })
        } else {
            return Response.json({
                success: false,
                message: 'Incorrect verification Code.'
            }, { status: 500 })
        }

    } catch (error) {
        console.log('Error verifying user', error);
        return Response.json({
            success: false,
            message: 'Error verifying user'
        }, { status: 500 })

    }
}