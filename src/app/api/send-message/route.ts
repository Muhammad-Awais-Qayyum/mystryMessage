
import dbConnect from "@/lib/dbConnect";
import userModel, { Message } from "@/model/User";


export async function POST(request: Request) {
    await dbConnect()


    const { username, content } = await request.json()

    try {
        const user = await userModel.findOne({ username })

        if (!user) {
            return Response.json({
                success: false,
                message: 'User not found'
            }, { status: 404 })
        }

        // is user accepting the messages

        if (!user.isAcceptingMessage) {
            return Response.json({
                success: false,
                message: 'User is not accepting message'
            }, { status: 403 })
        }

        const newMessages= {content ,createdAt:new Date()}

        user.messages.push(newMessages as Message)

        await user.save()

        return Response.json({
            success: true,
            message: 'Message sent successfully'
        }, { status: 200 })

    } catch (error) {
        return Response.json({
            success: false,
            message: 'User is not accepting message'
        }, { status: 403 })
    }
}
