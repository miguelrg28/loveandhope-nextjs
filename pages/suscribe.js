import { useState } from 'react'
import { ErrorMessages } from '../utils/data'
import axios from 'axios'
import styles from '../styles/Suscribe.module.css'

export default function Suscribe() {
    const [email_form, setEmail] = useState('')
    const [succeed, setSucceed] = useState(false)
    const [ErrorText, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        let email = email_form.trim()

        if (email === '') {
            return setError(ErrorMessages.emptyFields)
        }

        let mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        if (!email.match(mailFormat)) {
            return setError(ErrorMessages.invalidMail)
        }

        try {
            const res = await axios.post('/api/suscribe', { email: email_form })
            if (res.status === 200) {
                console.log('asdsad')
                return setSucceed(true)
            }
        } catch (err) {
            console.log('Failed')
            if (err?.response?.data.success === false) {
                setSucceed(false)
                return setError(ErrorMessages.emailDuplicated)
            }
        }
    }

    return (
        <>
            <div className={`background ${styles.background}`}>
                <div className="background_blur">
                    <form className={styles.container} onSubmit={handleSubmit}>
                        <div className={styles.title_container}>
                            <span>
                                {succeed
                                    ? '¡Se ha suscrito con éxito!'
                                    : 'Suscribirse para recibir más información'}
                            </span>
                        </div>

                        {!succeed && (
                            <>
                                <div className={styles.suscribirse_container}>
                                    <p className="error_text">{ErrorText}</p>
                                    <input
                                        type="text"
                                        autoComplete="email"
                                        placeholder="Correo electrónico"
                                        onChange={(e) => setEmail(e.target.value)}
                                        value={email_form}
                                    />
                                    <input
                                        type="submit"
                                        className="button-form"
                                        value="Suscribirse"
                                    />
                                </div>

                                <div className={styles.description_container}>
                                    <p>
                                        Al suscribirse recibirá notificaciones cada vez que se haga
                                        alguna actividad relacionada a la fundación y así podrá
                                        colaborar en lo que desee.
                                    </p>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </>
    )
}
