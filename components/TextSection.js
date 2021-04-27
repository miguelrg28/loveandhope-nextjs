const TextSection = ({ title, description, children, className }) => (
    <>
        <div className={`text-section ${className}`}>
            <span>{title}</span>
            <hr />
            {children ? <div>{children}</div> : <p>{description}</p>}
        </div>
        <style jsx>{`
            .text-section {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                width: 100%;
            }
            hr {
                width: 100%;
                border: thin solid #c8c8c8;
                border-radius: 500px;
                max-height: 0.18em;
                height: 0.18em;
                margin: 10px 0;
                background-color: #c8c8c8;
            }

            .text-section > span {
                font-family: 'Quicksand', sans-serif;
                font-weight: 700;
                display: block;
                color: #1a72e7;
                margin: 10px 0 0 0;
                font-size: 1.3em;
            }

            .text-section > p {
                margin: 6px 0;
                font-weight: 500;
                font-size: 0.9em;
                line-height: 1.5;
                color: #4d4d4d;
            }

            .text-section > div {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                margin: 6px 0;
            }
        `}</style>
    </>
)

export default TextSection
