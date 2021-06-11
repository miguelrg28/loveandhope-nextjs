import Head from 'next/head'
import styles from '../../styles/News.module.css'
import axios from 'axios'
import {
    AiOutlineFacebook,
    AiOutlineInstagram,
    AiOutlineWhatsApp,
    AiOutlineTwitter,
} from 'react-icons/ai'
import { convertDateToString } from '@/utils/hooks'
import { useEffect, useState } from 'react'

export async function getServerSideProps({ query }) {
    try {
        const res = await axios.get(`${process.env.API_URI}/news/${query.id}`)
        return { props: { news: res.data.news } }
    } catch (err) {
        console.log(err)
    }
}

export default function News({ news }) {
    const [shareMessage, setShareMessage] = useState('')

    useEffect(() => {
        setShareMessage(`${news.title} - Hogar Escuela Nueva Esperanza \n${window.location.href}`)
    }, [])
    return (
        <>
            <Head>
                <title>{news.title} - Hogar Escuela Nueva Esperanza</title>
            </Head>
            <div className={styles.container}>
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
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
                        >
                            <button
                                className="social-button ligth"
                                style={{ textDecoration: 'none', color: '#878d9b' }}
                            >
                                <AiOutlineTwitter />
                            </button>
                        </a>
                        <button className="social-button ligth">
                            <AiOutlineWhatsApp />
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
