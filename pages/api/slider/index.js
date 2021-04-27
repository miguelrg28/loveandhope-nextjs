import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import MainSlide from '@/models/MainSlide'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .get(async (req, res) => {
        try {
            const slides = await MainSlide.find({})
            res.status(200).json({ success: true, slides })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })
    .use(VerifyToken)
    .post(async (req, res) => {
        const { title, img, urlToGo } = req.body
        try {
            const newSlide = new MainSlide({
                title,
                img,
                urlToGo,
            })

            const savedSlide = await newSlide.save()
            res.status(201).json({ success: true, savedSlide })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
