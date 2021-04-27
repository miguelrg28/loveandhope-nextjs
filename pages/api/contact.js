import nodemailer from 'nodemailer'

export default (req, res) => {
    const { name, email, message } = req.body

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    })

    const mailOption = {
        from: `${process.env.EMAIL}`,
        to: `hnuevaesperanza@gmail.com`,
        subject: `New mail from ${email}`,
        html: `<strong>Nombre del remitente: </strong>${name}
        <br />
        <strong>Correo electrónico: </strong>${email}
        <br />
        <p>${message}</p>`,
    }

    transporter.sendMail(mailOption, (err, data) => {
        console.log(`${name} ${email} ${message}`)
        if (err) {
            console.log(err)
            res.send('error' + JSON.stringify(err))
        } else {
            console.log('mail send')
            res.send('success')
        }
    })
}
