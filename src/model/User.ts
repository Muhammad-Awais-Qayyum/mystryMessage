import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string
    createdAt: Date
}

const messageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


export interface User extends Document {
    username: string
    email: string
    password: string,
    verifyCode: string,
    verifyCodeExpiry: Date,
    isAcceptingMessage: boolean,
    isVerified: boolean,
    messages: Message[]
}


const userSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, 'Please provide me  a username'],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Please provide me  a email'],
        unique: true,
        match: [/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/, 'Please provide me  a valid email address']
    },
    password: {
        type: String,
        required: [true, 'Please provide me  a password'],
        unique: true
    },
    verifyCode: {
        type: String,
    },
    verifyCodeExpiry: {
        type: Date
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAcceptingMessage:{
        type: Boolean,
        default: true
    },
    messages:[messageSchema]
})


const userModel=(mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",userSchema)


export default userModel