import Head from 'next/head'
import Menu from './Menu'
import Footer from './Footer'
const Layout = ({ children }) => (
    <>
        <div className="layout">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta
                    name="description"
                    content="Fundación sin fines de lucro donde se le brinda una oportunidad de educarse, ser protegidos y vivir dignamente a jovenes discapacitados. Dirigido por personas con el interés de servir y ayudar."
                />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />

                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <title>Hogar Escuela Nueva Esperanza</title>
            </Head>
            <Menu />
            <main>{children}</main>
            <Footer />
        </div>

        <style jsx>{`
            .layout {
                position: absolute;
                width: 100%;
                height: 100vh;
                display: -ms-grid;
                display: grid;
                -ms-grid-columns: 1fr 1fr;
                grid-template-columns: 1fr 1fr;
                -ms-grid-rows: auto 1fr auto;
                grid-template-rows: auto 1fr auto;
                grid-template-areas:
                    'header         header'
                    'container      container'
                    'footer         footer';
            }

            .layout > :global(header) {
                -ms-grid-row: 1;
                -ms-grid-column: 1;
                -ms-grid-column-span: 2;
                grid-area: header;
            }

            .layout > main {
                -ms-grid-row: 2;
                -ms-grid-column: 1;
                -ms-grid-column-span: 2;
                grid-area: container;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
            }

            .layout > :global(footer) {
                -ms-grid-row: 3;
                -ms-grid-column: 1;
                -ms-grid-column-span: 2;
                grid-area: footer;
            }
        `}</style>
    </>
)

export default Layout
