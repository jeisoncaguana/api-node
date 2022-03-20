import nodemailer from 'nodemailer';
import { environment } from "../config/environment"

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports.
    auth: {
      user: environment.MAIL_USER, // generated ethereal user
      pass: environment.MAIL_PASS, // generated ethereal password
    },
})

transporter.verify(() => {
    console.log('Ready for send emails')
})