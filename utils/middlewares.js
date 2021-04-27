import jwt from 'jsonwebtoken'
import User from '@/models/User'

export const VerifyToken = async (req, res, next) => {
    const authorization = req.headers.authorization
    let token = null

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.split(' ')[1]
    }

    try {
        //Ver si se devolvió o no un token
        if (!token) return res.status(403).json({ message: 'Token missing or invalid1' })

        //Decodificar token
        const decoded = jwt.verify(token, process.env.SECRET_TOKEN)
        if (!decoded.id) return res.status(403).json({ message: 'Token missing or invalid2' })

        //Revisar si el id concuerda con un usuario
        const user = await User.findById(decoded.id, { password: 0 })
        if (!user) return res.status(404).json({ message: 'Token missing or invalid3' })

        //Retornar el id del usuario del token y seguir con la ruta
        req.userId = decoded.id
        next()
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Unauthorized' })
    }
}
