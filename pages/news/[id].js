import styles from '../../styles/News.module.css'
import axios from 'axios'
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineTwitter,
    AiFillYoutube,
} from 'react-icons/ai'
import { convertDateToString } from '@/utils/hooks'

export async function getServerSideProps({ query }) {
    try {
        const res = await axios.get(`${process.env.API_URI}/news/${query.id}`)
        return { props: { news: res.data.news } }
    } catch (err) {
        console.log(err)
    }
}

export default function News({ news }) {
    return (
        <>
            <div class={styles.container}>
                <div className={styles.date_container}>
                    <span>{convertDateToString(news.createdAt)}</span>
                </div>
                <div className={styles.title_container}>
                    <span>{news.title}</span>
                </div>
                <div className={styles.author_container}>
                    <span className={styles.title}>Escrito por</span>
                    <span className={styles.text}>{news.author.fullName}</span>
                </div>
                <hr className={styles.decoration} />
                <div className={styles.cover_container}>
                    <img src={news.img} alt={news.title} />
                </div>
                <hr className={styles.sub_decoration} />
                <div className={styles.content_container}>
                    <p>{news.description}</p>
                </div>
                <hr className={styles.sub_decoration_two} />
                <div className={styles.share_container}>
                    <span>Compartir artículo</span>
                    <div className={styles.share_options}>
                        <button className="social-button ligth">
                            <AiOutlineInstagram />
                        </button>
                        <button className="social-button ligth">
                            <AiOutlineTwitter />
                        </button>
                        <button className="social-button ligth">
                            <AiFillYoutube />
                        </button>
                        <button className="social-button ligth">
                            <AiOutlineFacebook />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
