import { User, getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/options";
import userModel from "@/model/User";
import dbConnect from "@/lib/dbConnect";



export  async function DELETE(requset: Request, { params }: { params: { messageid: string } }) {
    const messageId = params.messageid
    console.log(messageId);
    
    await dbConnect()
    const session = await getServerSession(authOptions)

    const user: User = session?.user as User

    if (!session || !session.user) {
        return Response.json({
            success: false,
            message: 'Not Authenticated'
        }, { status: 500 })
    }
    try {
        const updatedResult = await userModel.updateOne(
            { _id: user._id },
            {
                $pull: { messages: { _id: messageId } }
            }
        )

        if (updatedResult.modifiedCount === 0) {
            return Response.json({
                success: false,
                message: "Message not found or already delete"
            }, { status: 404 })
        }
        return Response.json({
            success: true,
            message: "Message deleted"
        }, { status: 200 })
    } catch (error) {
        return Response.json({
            success: false,
            message: "Error  deleting Message"
        }, { status: 500 })
    }


}