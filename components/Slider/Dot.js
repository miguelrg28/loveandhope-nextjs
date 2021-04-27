const CustomDot = ({ onClick, active }) => (
    <>
        <button onClick={onClick}></button>
        <style jsx>{`
            button {
                cursor: pointer;
                transition: all 250ms ease-in;
                background-color: ${active ? `#dedede` : 'transparent'};
                color: ${active ? '#fff' : '333'};
                outline: none;
                transform: scale(${!active ? 1.1 : 1});
                display: flex;
                justify-content: center;
                align-items: center;
                border: ${!active ? '1px solid #C8C8C8' : 'none'};
                border-radius: 100%;
                padding: 6px;
                margin: 10px 10px;
            }

            @media only screen and (max-width: 768px) {
                button {
                    cursor: default;
                }
            }

            @media only screen and (max-width: 425px) {
                button {
                    /*transform: scale(${!active ? 0.95 : 0.85});*/
                    padding: 5px;
                    margin: 8px 10px;
                    /*max-height: 10px;
                    max-width: 10px;
                    min-width: 10px;
                    min-height: 10px;*/
                }
            }
        `}</style>
    </>
)

export default CustomDot
