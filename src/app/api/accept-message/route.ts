import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import userModel from "@/model/User";
import { User } from "next-auth";

export async function POST(requset: Request) {
    await dbConnect()

    const session = await getServerSession(authOptions)

    const user = session?.user as User

    if (!session || !session.user) {
        return Response.json({
            success: false,
            message: 'Not Authenticated'
        }, { status: 401 })
    }

    const userId = user._id

    const { acceptMessage } = await requset.json()



    try {
        const updateUser = await userModel.findByIdAndUpdate(userId, {
            isAcceptingMessage: acceptMessage
        }, { new: true }
        )

        if (!updateUser) {
            return Response.json({
                success: false,
                message: 'Failed  to update user status to accept Message'
            }, { status: 401 })
        }

        return Response.json({
            success: true,
            message: 'Message Acceptance status updated successfully',
            updateUser
        }, { status: 200 })
    } catch (error) {
        console.log('Failed  to update user status to accept Message', error);

        return Response.json({
            success: false,
            message: 'Failed  to update user status to accept Message'
        }, { status: 500 })
    }
}


export async function GET(requset: Request) {
    await dbConnect()

    const session = await getServerSession(authOptions)

    const user = session?.user as User

    if (!session || !session.user) {
        return Response.json({
            success: false,
            message: 'Not Authenticated'
        }, { status: 401 })
    }

    const userId = user._id


    try {
        const foundUser = await userModel.findById(userId)


        if (!foundUser) {
            return Response.json({
                success: false,
                message: 'User not found'
            }, { status: 404 })
        }

        return Response.json({
            success: true,
            message: 'Message Acceptance status updated successfully',
            isAcceptingMessages: foundUser.isAcceptingMessage
        }, { status: 200 })
    } catch (error) {
        console.log('Error is getting message acceptance status ', error);

        return Response.json({
            success: false,
            message: 'Error is getting message acceptance status'
        }, { status: 500 })
    }
}

