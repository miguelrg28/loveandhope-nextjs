import Head from 'next/head'
import TextSection from '@/components/TextSection'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Escuela Amor y Esperanza - Acerca de</title>
            </Head>
            <img src="/logo.jpg" alt="Logo" />
            <div className={styles.sections_container}>
                <TextSection
                    className={styles.our_story}
                    title="Nuestra historia"
                    description={`El Hogar se funda en 1997, y al siguiente año se reclutan los primeros niños y niñas residentes.\n En el año 1999 nace dentro del recinto la Escuela de Educación Especial, y años más tarde, debido al poco espacio dentro de la casa, y con la ayuda de empresas y clubes de Santiago se inicia la construcción de la escuela en el mismo terreno. En enero 2006, la misma se traslada al nuevo local.`}
                />
                <TextSection
                    className={styles.what_wedo}
                    title="¿Qué hacemos?"
                    description="Actualmente damos escolaridad a 50 niños, niñas y jóvenes a partir de los 6 años, distribuidos en 4 niveles (inicial, básica 1, básica 2 y área de taller ocupacional y vida independiente). Ofrecemos dos meriendas y almuerzo para todos los asistentes. Además, nos hacemos cargo de algunos jóvenes que son residentes permanentes en la institución, y su cuidado es responsabilidad del Hogar."
                />
                <TextSection className={styles.our_location} title="Ubicación">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d493.22855305353164!2d-70.64147043597902!3d19.427228463792588!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI1JzM3LjAiTiA3MMKwMzgnMjguOCJX!5e0!3m2!1ses-419!2sus!4v1618414905131!5m2!1ses-419!2sus"
                        width={576}
                        height={378}
                        style={{ border: '0' }}
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </TextSection>
            </div>
        </div>
    )
}
