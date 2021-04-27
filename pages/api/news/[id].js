import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import News from '@/models/News'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .get(async (req, res) => {
        const {
            query: { id },
        } = req
        try {
            const foundNews = await News.findById(id)

            if (!foundNews) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ sucess: true, news: foundNews })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })
    .use(VerifyToken)
    .put(async (req, res) => {
        const {
            query: { id },
        } = req
        try {
            const updatedNews = await News.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            })

            if (!updatedNews) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ sucess: true, message: `Noticia ${id} actualizada con éxito!` })
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
            const deletedNews = await News.findByIdAndDelete(id)

            if (!deletedNews) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ sucess: true, message: `Noticia ${id} eliminada!` })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
