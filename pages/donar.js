import styles from '../styles/Donar.module.css'

export default function Donar() {
    return (
        <div className={`background ${styles.background}`}>
            <div className="background_blur">
                <div className={styles.container}>
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
                            Tenemos como objetivo que nuestros niños, niñas y jovenes consigan una
                            mejor calidad de vida, con dignidad, aceptación e integración social.
                            Desarrollando al máximo sus capacidades físicas, educativas y
                            emocionales.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
