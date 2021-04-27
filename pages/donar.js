import Head from 'next/head'
import styles from '../styles/Donar.module.css'

export default function Donar() {
    return (
        <div className="background">
            <div className="background_blur">
                <div className={styles.container}>
                    <Head>
                        <title>Donaciones</title>
                    </Head>

                    <div className={styles.title_container}>
                        <span>Aporta para un mejor futuro</span>
                        <hr />
                    </div>

                    <form
                        className={styles.donar_container}
                        action="https://www.paypal.com/donate"
                        method="post"
                        target="_top"
                    >
                        <input type="hidden" name="hosted_button_id" value="LAF7ET4E694HL" />
                        {/*En value va el id del botón de donar*/}
                        <button className="button-form important_btn">Donar</button>
                    </form>

                    <div className={styles.description_container}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                            dapibus, leo eu maximus placerat, felis velit vestibulum mauris, non
                            hendrerit mi neque eu est.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
