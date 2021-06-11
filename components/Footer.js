import Link from 'next/link'
import { SocialMedia, FooterInfo } from '../utils/data'

const Footer = () => (
    <>
        <footer>
            <div className="left">
                <span className="title">{FooterInfo.title}</span>
                <a href="tel:+18096122712" title="Número Telefonico" className="number">
                    {FooterInfo.cellnumber}
                </a>
            </div>
            <div className="right">
                {SocialMedia.map((button) => (
                    <a target="_blank" rel="noopener noreferrer" href={button.url} key={button.id}>
                        <button className="social-button dark" title={button.name}>
                            {button.icon}
                        </button>
                    </a>
                ))}
            </div>
        </footer>
        <style jsx>{`
            footer {
                padding: 14px;
                background-color: #292c2f;
                display: flex;
            }

            footer a {
                text-decoration: none;
                color: #fff;
            }

            footer a:not(:last-child) {
                margin-right: 16px;
            }

            footer > .left {
                display: flex;
                flex-direction: column;
                width: 100%;
                justify-content: flex-start;
            }

            .left > .title {
                color: #fff;
                margin-bottom: 5px;
                font-size: 0.88em;
                font-weight: 500;
            }

            .left .number {
                color: #6d6e70;
                font-size: 0.78em;
                width: fit-content;
            }

            .number:hover {
                text-decoration: underline;
            }

            footer > .right {
                display: flex;
                width: 100%;
                justify-content: flex-end;
                align-items: center;
            }
        `}</style>
    </>
)

export default Footer
