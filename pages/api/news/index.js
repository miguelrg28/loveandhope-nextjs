import dbConnect from '@/utils/dbConnect'
import { VerifyToken } from '@/utils/middlewares'
import News from '@/models/News'
import Suscriber from '@/models/Suscriber'
import sendMail from '@/utils/sendMail'
import nc from 'next-connect'

dbConnect()

const handler = nc()
    .get(async (req, res) => {
        try {
            const foundNews = await News.find({})
            res.status(200).json({ success: true, news: foundNews })
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })
    .use(VerifyToken)
    .post(async (req, res) => {
        try {
            const { title, img, description } = req.body

            const newNews = new News({
                title,
                img,
                description,
                author: req.userId,
            })

            const savedNews = await newNews.save()

            //Send positive results
            res.status(201).json({ success: true, savedNews })

            //Content for email
            let content = `
        <div class="container" style="display: block;margin: 8px;">
        <table style="border: 2.5px solid #f1f1f1;font-family: Montserrat, 'sans-serif';width: 100%;padding: 10px;">
            <tr>
                <td class="img-container" style="display: block;text-align: center;">
                    <img src="https://henuevaesperanza.vercel.app/logo.jpg" alt="" style="width: 375px;margin-bottom: 10px;">
                </td>
            </tr>
            <tr>
                <td class="notify-news" style="display: block;text-align: center;"><h2 style="color: #4d4d4d;font-size: 1.5em;text-align: center;margin: 15px 0;">Nueva publicación</h2></td>
            </tr>
            <tr>
                <td class="news-title-container" style="display: block;text-align: center;">
                    <span style="display: inline-block;text-align: center;font-weight: 600;font-size: 1.1em;color: #5a6073;margin: 10px;">${savedNews.title}</span>
                    <hr style="width: 100%;max-width: 46px;border: thin solid #e0dfe2;background-color: #e0dfe2;height: 0.001em;">
                </td>
            </tr>
            <tr>
                <td class="news-image-container" style="display: block;text-align: center;margin: 10px;">
                    <img src="${savedNews.img}" alt="" style="display: block;margin-left: auto;margin-right: auto;height: 300px;">
                    <hr style="margin-top: 30px;width: 100%;max-width: 1250px;border: thin solid #e0dfe2;background-color: #e0dfe2;height: 0.001em;">
                </td>
            </tr>
            <tr>
                <td class="news-description-container" style="display: block;text-align: center;">
                    <p style="display: inline-block;width: 100%;max-width: 1250px;font-size: 0.9em;color: #7f7f8b;text-align: justify;text-justify: newspaper;margin: 6px;">
                    ${savedNews.description}
                    </p>
                </td>
            </tr>
            <tr>
                <td class="news-button" style="display: block;text-align: center;margin-top: 10px;">
                    <a href="https://henuevaesperanza.vercel.app/news/${savedNews._id}" style="-webkit-appearance: none;-moz-appearance: none;margin-top: 6px;appearance: none;padding: 12px;font-family: 'Montserrat', sans-serif;border: none;outline: none;background-color: #1a72e7;font-weight: 500;font-size: 0.85em;text-decoration: none;display: inline-block;color: #fff;width: fit-content;cursor: pointer;border-radius: 3px;-webkit-transition: 0.3s;-o-transition: 0.3s;transition: 0.3s;">Seguir leyendo</a>
                </td>
            </tr>
        </table>
    </div>
        `

            //Get all people suscribed to news
            const suscribers = await Suscriber.find({}).select('email')
            const emailList = []

            for (let i = 0; i < suscribers.length; i++) {
                emailList.push(suscribers[i].email)
            }

            console.log(emailList)

            //Count each people suscribed and send email to them
            sendMail(
                emailList,
                'Nueva noticia en Hogar Escuela Nueva Esperanza',
                content,
                (err, data) => {
                    if (err) {
                        console.log(err)
                        res.send('error' + JSON.stringify(err))
                    }
                    console.log('mail send')
                    res.status(200)
                    res.send('success')
                }
            )
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
