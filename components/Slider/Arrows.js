import { consts } from 'react-elastic-carousel'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const CustomArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <IoIosArrowBack /> : <IoIosArrowForward />
    return (
        <>
            <div>
                <button onClick={onClick} disabled={isEdge}>
                    {pointer}
                </button>
            </div>

            <style jsx>{`
                div {
                    display: flex;
                    align-items: center;
                }
                button {
                    background: none;
                    border: none;
                    font-size: 1.8em;
                    display: flex;
                    padding: 15px 1px;
                    background: rgba(24, 24, 24, 0.95);
                    justify-content: center;
                    align-items: center;
                    outline: none;
                    height: fit-content;
                    cursor: pointer;
                    transition: 0.3s;
                    user-select: none;
                    color: #fff;
                }

                button:hover {
                    background: rgba(24, 24, 24, 0.88);
                }

                button:active {
                    background: rgb(24, 24, 24);
                }

                button[disabled='disabled'],
                button:disabled {
                    opacity: 0;
                    cursor: default;
                }

                @media only screen and (max-width: 768px) {
                    button {
                        cursor: context-menu;
                    }
                    button:hover {
                        background: rgba(24, 24, 24, 0.95);
                    }

                    button:active {
                        background: rgb(24, 24, 24);
                    }
                }
            `}</style>
        </>
    )
}

export default CustomArrow
