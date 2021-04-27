import dbConnect from '@/utils/dbConnect'
import Suscriber from '@/models/Suscriber'
import nc from 'next-connect'

dbConnect()

const handler = nc().post(async (req, res) => {
    try {
        const { email } = req.body

        const newSuscriber = new Suscriber({ email })
        const savedSuscriber = await newSuscriber.save()

        if (!savedSuscriber) {
            return res.status(400).json({ success: false })
        }

        res.json({ status: 1, message: 'Suscrito con éxito' })
    } catch (err) {
        console.log(err)
        return res.status(500).send({ sucess: false })
    }
})

export default handler
