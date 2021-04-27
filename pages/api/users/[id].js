import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import User from '@/models/User'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .use(VerifyToken)
    .get(async (req, res) => {
        const {
            query: { id },
        } = req
        try {
            const user = await User.findById(id, 'email fullName password createdAt')
            if (!user) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ success: true, user })
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
            const deletedUser = await User.findByIdAndDelete(id)

            if (!deletedUser) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ success: true, message: `Administrador ${id} eliminado!` })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
