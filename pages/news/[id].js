import Head from 'next/head'
import styles from '../../styles/News.module.css'
import axios from 'axios'
import {
    AiOutlineFacebook,
    AiOutlineShareAlt,
    AiOutlineWhatsApp,
    AiOutlineTwitter,
} from 'react-icons/ai'
import { convertDateToString, copyToClipboard } from '@/utils/hooks'
import swal from 'sweetalert2'
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

    const shareOption = () => {
        if (navigator.share)
            navigator.share({
                title: `${news.title} - Hogar Escuela Nueva Esperanza`,
                url: window.location.href,
            })
        else {
            swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Copiado al portapapeles',
                html: '<p>¡Puedes compartir este link a cualquier persona!</p>',
                showConfirmButton: false,
                timer: 1000,
            }).then((result) => {
                if (result) {
                    copyToClipboard(shareMessage)
                }
            })
        }
    }

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
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: '#878d9b' }}
                            href={`https://twitter.com/intent/tweet?text=${shareMessage}`}
                        >
                            <button className="social-button ligth">
                                <AiOutlineTwitter />
                            </button>
                        </a>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: '#878d9b' }}
                            href={`whatsapp://send?text=${shareMessage}`}
                            data-action="share/whatsapp/share"
                        >
                            <button className="social-button ligth">
                                <AiOutlineWhatsApp />
                            </button>
                        </a>
                        <button className="social-button ligth">
                            <AiOutlineFacebook />
                        </button>
                        <button className="social-button ligth" onClick={shareOption}>
                            <AiOutlineShareAlt />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
