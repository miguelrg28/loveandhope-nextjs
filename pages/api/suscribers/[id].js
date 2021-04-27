import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import Suscriber from '@/models/Suscriber'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .use(VerifyToken)
    .get(async (req, res) => {
        const {
            query: { id },
        } = req
        try {
            const suscriber = await Suscriber.findById(id)

            if (!suscriber) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ success: true, suscriber })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })
    .delete(async (req, res) => {
        const {
            query: { id },
        } = req

        try {
            const deletedSuscriber = await Suscriber.findByIdAndDelete(id)

            if (!deletedSuscriber) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ success: true, message: `Suscriptor ${id} eliminado!` })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
