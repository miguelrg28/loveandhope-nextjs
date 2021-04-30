import Link from 'next/link'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Slider from '@/components/Slider'

export async function getServerSideProps() {
    try {
        const sliders = await axios.get(`${process.env.API_URI}/slider`)
        const news = await axios.get(`${process.env.API_URI}/news`)

        return {
            props: { MainSlides: sliders.data.slides, NewsSlides: news.data.news },
        }
    } catch (err) {
        console.log(err)
    }

    return { props: { MainSlides: [], NewsSlides: [] } }
}

export default function Home({ MainSlides, NewsSlides }) {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.slider_container}>
                    <Slider items={MainSlides} autoPlay={false} />
                </div>

                <div className={styles.about_info}>
                    <div className={styles.who_container}>
                        <span>Quienes somos</span>
                        <p>
                            Somos una organización sin fines de lucro dirigida a niños, niñas y
                            adolescentes con deficiencias en el desarrollo físico y mental. Está
                            dirigida por una junta directiva compuesta por un grupo de personas con
                            interés de servir y ayudar a los más necesitados.
                        </p>
                    </div>

                    <div className={styles.our_vision}>
                        <span>Nuestra misión</span>
                        <p>
                            Garantizar a los niños, niñas y adolescentes con necesidades especiales
                            cuidado, protección y educación incluyente para que logren la inserción
                            en la sociedad de una manera justa y digna.
                        </p>
                    </div>

                    <div className={styles.our_values}>
                        <span>Valores</span>
                        <p>
                            Nos sentimos identificados con el respeto, inclusión, vocación,
                            comprensión, dignidad, solidaridad, servicio y desarrollo.
                        </p>
                    </div>
                </div>

                <div className={styles.suscribe_container}>
                    <Link href="/suscribe">
                        <button className="button-form important_btn">Suscribirse</button>
                    </Link>
                </div>

                <div className={styles.news_container}>
                    <span>Noticias</span>
                    <div>
                        <Slider items={NewsSlides} arrows={true} />
                    </div>
                </div>
            </div>
        </>
    )
}
