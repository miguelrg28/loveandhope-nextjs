const ContactCard = ({ icon, title, description, url, rotate }) => (
    <>
        <a target="_blank" rel="noopener noreferrer" href={url}>
            <div className="card">
                <div className="icon">{icon}</div>
                <div className="content">
                    <span className="title">{title}</span>
                    <p>{description}</p>
                </div>
            </div>
        </a>
        <style jsx>{`
            .card {
                display: flex;
                background-color: #f6f6f6;
                padding: 8px;
                border-radius: 6px;
                margin-bottom: 15px;
                transition: 0.3s;
            }

            .card:hover {
                background-color: rgba(24, 24, 24, 0.1);
            }

            .card:active {
                background-color: rgb(24, 24, 24, 0.2);
            }

            .card > div {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 12px;
            }

            .card > div.icon {
                justify-content: center;
                align-items: center;
            }

            .card > div.icon :global(svg) {
                color: #3d3d3d;
                font-size: 3em;
                ${rotate && `transform: rotate(90deg);`}
            }

            .card .title {
                font-weight: 600;
                font-size: 1em;
                color: #2d2d2d;
            }

            .card p {
                margin: 6px 0;
                color: #4d4d4d;
                font-size: 0.9em;
                width: 100%;
            }

            @media (hover: none) {
                .card {
                    cursor: none;
                }
                .card:hover {
                    background-color: #f6f6f6;
                }

                .card:active {
                    background-color: rgb(24, 24, 24, 0.2);
                }
            }
        `}</style>
    </>
)

export default ContactCard
