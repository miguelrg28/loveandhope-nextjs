import dbConnect from '@/utils/dbConnect'
import User from '@/models/User'
import nc from 'next-connect'
import { VerifyToken } from '@/utils/middlewares'
import jwt from 'jsonwebtoken'

dbConnect()

const handler = nc()
    .use(VerifyToken)
    .post(async (req, res) => {
        const { email, fullName, password } = req.body

        try {
            const newUser = new User({
                email,
                fullName,
                password,
            })

            const savedUser = await newUser.save()
            const token = jwt.sign({ id: savedUser._id }, process.env.SECRET_TOKEN, {
                expiresIn: 86400,
            })

            res.status(201).json({ token })
        } catch (err) {
            console.log(`Error al crear el usuario: ${err}`)
            res.status(400).json({ message: 'Error al crear usuario.' })
        }
    })

export default handler
