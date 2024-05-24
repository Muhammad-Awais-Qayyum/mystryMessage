import { User, getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/options";
import userModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";
import mongoose from "mongoose";



export async function GET(requset: Request) {
    await dbConnect()

    const session = await getServerSession(authOptions)

    const user: User = session?.user as User

    if (!session || !session.user) {
        return Response.json({
            success: false,
            message: 'Not Authenticated'
        }, { status: 500 })
    }

    const userId = new mongoose.Types.ObjectId(user._id)


    
    try {
        const user = await userModel.aggregate([
            { $match: { _id: userId } },
            { $unwind: '$messages' },
            { $sort: { 'messages.createdAt': -1 } },
            { $group: { _id: '$_id', messages: { $push: '$messages' } } }
        ])
        if (!user) {
            return Response.json({
                success: false,
                message: 'User not Found'
            }, { status: 500 })
        }

        if (user.length === 0) {
            return Response.json({
                success: false,
                message: 'You have no message recieved'
            }, { status: 500 })
        }

      
        
        return Response.json({
            success: true,
            messages: user[0].messages
        }, { status: 200 })
    } catch (error) {
        console.log('Get message Error', error);
        return Response.json({
            success: false,
            message: 'Get message not found'
        }, { status: 403 })
    }
}