import dbConnect from '@/utils/dbConnect'
import User from '@/models/User'
import nc from 'next-connect'
import jwt from 'jsonwebtoken'

dbConnect()

const handler = nc().post(async (req, res) => {
    try {
        //Find user
        const userFound = await User.findOne({ email: req.body.email }, 'email password')

        if (!userFound) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }

        //Check if password match
        const matchPassword = await User.comparePassword(req.body.password, userFound.password)

        if (!matchPassword)
            return res.status(401).json({ token: null, message: 'Invalid email or password' })

        //Sign and send the JWT
        const token = jwt.sign({ id: userFound._id }, process.env.SECRET_TOKEN, {
            expiresIn: 86400,
        })

        res.status(200).json({ token })
    } catch (err) {
        return res.status(500).send({ message: err })
    }
})

export default handler
