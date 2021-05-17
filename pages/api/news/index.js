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
            const { title, img, description, urlToGo } = req.body

            const newNews = new News({
                title,
                img,
                description,
                urlToGo,
            })

            const savedNews = await newNews.save()

            //Send positive results
            res.status(201).json({ success: true, savedNews })

            //Content for email
            /*let content = `<div class="container" style="display: block;margin: 8px;">
            <table style="border: 2.5px solid #f1f1f1;font-family: Montserrat, 'sans-serif';width: 100%;padding: 10px;">
                <tr>
                    <td class="img-container" style="display: block;text-align: center;">
                        <img src="#" alt="" style="width: 375px;margin-bottom: 10px;">
                    </td>
                </tr>
                <tr>
                    <td class="notify-news" style="display: block;text-align: center;"><h2 style="color: #6d6d6d;font-size: 1.3em;text-align: center;margin: 15px 0;">Nueva noticia publicada</h2></td>
                </tr>
                <tr>
                    <td class="news-title-container" style="display: block;text-align: center;">
                        <span style="font-weight: 600;font-size: 1em;color: #2d2d2d;margin: 10px;">${savedNews.title}</span>
                    </td>
                </tr>
                <tr>
                    <td class="news-description-container" style="display: block;text-align: center;">
                        <p style="display: inline-block;width: fit-content;font-size: 0.95em;text-align: justify;color: #000;text-justify: newspaper;margin: 6px;">
                            ${savedNews.description}
                        </p>
                    </td>
                </tr>
                <tr>
                    <td style="display: block;text-align: center;"><a href="#" style="-webkit-appearance: none;-moz-appearance: none;margin-top: 6px;appearance: none;padding: 12px;font-family: 'Montserrat', sans-serif;border: none;outline: none;background-color: #1a72e7;font-weight: 500;font-size: 0.9em;text-decoration: none;display: inline-block;color: #fff;width: fit-content;cursor: pointer;border-radius: 3px;-webkit-transition: 0.3s;-o-transition: 0.3s;transition: 0.3s;">Ir hacia página web</a></td>
                </tr>
            </table>
        </div>`

            //Get all people suscribed to news
            const suscribers = await Suscriber.find({}).select('email')

            //Count each people suscribed and send email to them
            for (let i = 0; i < suscribers.length; i++) {
                sendMail(
                    suscribers[i].email,
                    'Nueva noticia en Hogar Escuela Nueva Esperanza',
                    content,
                    (err, data) => {
                        if (err) {
                            console.log(err)
                            res.send('error' + JSON.stringify(err))
                        } else {
                            console.log('mail send')
                            res.status(200)
                            res.send('success')
                        }
                    }
                )
            }*/
        } catch (err) {
            console.log(err)
            res.status(400).json({ success: false })
        }
    })

export default handler
