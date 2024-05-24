require('dotenv').config()
import nodeMailer, { Transporter } from 'nodemailer'


interface EmailOptions {
    email: string,
    subject: string,
    template: string,
    verifyCode: string
}


const sendMail = async (options: EmailOptions): Promise<void> => {
    const transporter: Transporter = nodeMailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        service: process.env.SMTP_SERVICE,
        auth: {
            user: process.env.SMTP_MAIL,
            pass: process.env.SMTP_PASSWORD
        }
    })

    const { email, subject, verifyCode } = options;

    // template path for mail

    try {
        const html = `
          <html>
            <body>
              <h5>Mystery Message Verification Code</h5>
              <p>Your verification code is: ${verifyCode}</p>
            </body>
          </html>
        `;

        const mailOptions = {
            from: process.env.SMTP_MAIL,
            to: email,
            subject,
            html
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendMail;