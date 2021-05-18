import axios from 'axios'
import { useState } from 'react'
import styles from '../styles/Contact.module.css'
import ContactCard from '../components/ContactCard'
import { ErrorMessages, SocialMedia } from '../utils/data'
import { AiOutlinePhone } from 'react-icons/ai'

export default function Contact() {
    const [FormData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [ErrorText, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, message } = FormData

        //Verificar si los campos están vacíos
        if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
            return setError(ErrorMessages.emptyFields)
        }

        //Verificar si es un email válido
        let mailFormat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/
        if (!email.match(mailFormat)) {
            return setError(ErrorMessages.invalidMail)
        }

        //Hacer petición POST
        const res = await axios.post('/api/contact', FormData, {
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
        })

        console.log(`fetch ${res.data}`)
        if (res.status === 200) {
            alert('Enviado')
        } else {
            alert('Error')
        }
    }

    /*const handleChange = async (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value,
        })
    }*/

    return (
        <div className={styles.container}>
            <div className={styles.form_container}>
                <span className={styles.title}>Contactanos</span>
                <ContactCard
                    rotate
                    icon={<AiOutlinePhone />}
                    title="Teléfono"
                    description="+1 809 612 2712"
                    url="tel:+18096122712"
                />
                {SocialMedia.map((social, i) => (
                    <ContactCard
                        key={i}
                        icon={social.icon}
                        title={social.name}
                        description={social.text}
                        url={social.url}
                    />
                ))}
            </div>

            {/*<p className="error_text">{ErrorText}</p>
                <input
                    type="text"
                    placeholder="Nombre"
                    autoComplete="name"
                    name="name"
                    onChange={handleChange}
                    value={FormData.name}
                />
                <input
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Correo electrónico"
                    onChange={handleChange}
                    value={FormData.email}
                />
                <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Escribe tu mensaje"
                    onChange={handleChange}
                    value={FormData.message}
                ></textarea>
    <button className="button-form">Enviar</button>*/}
        </div>
    )
}
