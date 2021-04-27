import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import Suscriber from '@/models/Suscriber'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .use(VerifyToken)
    .get(async (req, res) => {
        try {
            const suscribers = await Suscriber.find({})
            res.status(200).json({ success: true, suscribers })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
