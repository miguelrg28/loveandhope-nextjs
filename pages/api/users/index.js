import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import User from '@/models/User'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .use(VerifyToken)
    .get(async (req, res) => {
        try {
            const users = await User.find({})

            res.status(200).json({ success: true, users })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
