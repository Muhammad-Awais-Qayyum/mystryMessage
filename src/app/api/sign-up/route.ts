import userModel from "@/model/User";
import bcrypt from 'bcryptjs'
import dbConnect from "@/lib/dbConnect";
import sendMail from "@/lib/sendMail";


export async function POST(request: Request) {
    await dbConnect()
    try {

        const { username, email, password } = await request.json()
    
        const existingUserVerifiedByUsername = await userModel.findOne({
            username,
            isVerified: true
        })
    
        if (existingUserVerifiedByUsername) {
            return Response.json({
                success: false,
                message: 'Username is already taken'
            }, { status: 400 })
        }
    
        const existingUserByEmail = await userModel.findOne({
            email,
        })
    
        const verifyCode = Math.floor(100000 + Math.random() * 900000).toString()
    
        if (existingUserByEmail) {
            if (existingUserByEmail.isVerified) {
                return Response.json({
                    success: false,
                    message: 'User already exist with this email'
                }, { status: 404 })
            } else {
                const hashedPassword = await bcrypt.hash(password, 10)
                const expiryDate = new Date()
                expiryDate.setHours(expiryDate.getHours() + 1)
    
                existingUserByEmail.password = hashedPassword
                existingUserByEmail.verifyCode = verifyCode
                existingUserByEmail.verifyCodeExpiry = expiryDate
    
                await existingUserByEmail.save()
            }
        } else {
            const hashedPassword = await bcrypt.hash(password, 10)
            const expiryDate = new Date()
    
            expiryDate.setHours(expiryDate.getHours() + 1)
    
            const newUser = new userModel({
                email,
                username,
                password: hashedPassword,
                verifyCode,
                verifyCodeExpiry: expiryDate,
                messages: []
    
            })
    
            await newUser.save()
        }
    

        // Send verification email
        try {
            await sendMail({
            email: email || null,
            subject: "Activate your Account",
            template: "activation-email.ejs",
            verifyCode,
        });
        } catch (error) {
            
                console.error('Error rendering email template:', error);
            
        }
        

        return Response.json({
            success: true,
            message: 'User registered successfully.Please verify your email'
        }, { status: 200 })
    
    
    } catch (error) {
        console.error('Error registering Error', error)
    
        return Response.json({
            success: false,
            message: 'Error registering User'
        }, { status: 500 })
    }
}


