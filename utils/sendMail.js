import nodemailer from 'nodemailer'

export default (emailTo, subject, content, func) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    })

    const mailOption = {
        from: process.env.EMAIL,
        to: emailTo,
        subject: subject,
        html: content,
    }

    transporter.sendMail(mailOption, (err, data) => func(err, data))
}
