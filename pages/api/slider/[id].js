import dbConnect from '@/utils/dbConnect'
import MainSlide from '@/models/MainSlide'
import { VerifyToken } from '@/utils/middlewares'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .get(async (req, res) => {
        const {
            query: { id },
        } = req
        try {
            const slide = await MainSlide.findById(id)

            if (!slide) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ sucess: true, slide })
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
            const slide = await MainSlide.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true,
            })

            if (!slide) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ sucess: true, message: `Slider ${id} actualizado con éxito!` })
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
            const deletedSlide = await MainSlide.findByIdAndDelete(id)

            if (!deletedSlide) {
                return res.status(400).json({ success: false })
            }

            res.status(200).json({ sucess: true, message: `Slider ${id} eliminado!` })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
