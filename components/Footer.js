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
                        <button title={button.name}>{button.icon}</button>
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

            footer button {
                appearance: none;
                border: none;
                outline: none;
                background: #33383b;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                padding: 8px;
                transition: 0.3s;
                border-radius: 4px;
                cursor: pointer;
            }

            footer a:not(:last-child) {
                margin-right: 16px;
            }

            footer button:hover {
                background-color: #404649;
            }

            footer button:active {
                background-color: #2e3336;
            }

            footer button > :global(svg) {
                font-size: 1.6em;
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

            @media only screen and (max-width: 768px) {
                footer button {
                    cursor: default !important;
                }

                footer button:hover {
                    background: #33383b !important;
                }

                footer button:active {
                    background-color: #2e3336 !important;
                }
            }
        `}</style>
    </>
)

export default Footer
