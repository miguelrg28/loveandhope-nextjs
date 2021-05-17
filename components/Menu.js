import { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'

const Menu = () => {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <>
            <header>
                <button className="toggle-menu" onClick={() => setExpanded(!isExpanded)}>
                    <FiMenu />
                </button>
                <nav className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>
                    <Link href="/">
                        <button>Inicio</button>
                    </Link>
                    <Link href="/donate">
                        <button>Donar</button>
                    </Link>
                    {/*<Link href="/contact">
                        <button>Contactanos</button>
    </Link>*/}
                    <Link href="/about">
                        <button>Acerca de</button>
                    </Link>
                </nav>
            </header>
            <style jsx>{`
                header {
                    position: sticky;
                    top: 0;
                    display: flex;
                    justify-content: flex-end;
                    background-color: #fff;
                    z-index: 1000;
                    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.04),
                        0 4px 6px -2px rgba(0, 0, 0, 0.04);
                }

                header > nav {
                    display: flex;
                }

                header > nav button {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    user-select: none;
                    padding: 14px 18px;
                    cursor: pointer;
                    outline: none;
                    border: none !important;
                    font-family: 'Quicksand', sans-serif;
                    font-weight: 600;
                    outline: none;
                    color: #3d4246;
                    background: none;
                    font-size: 0.95em;
                    transition: 0.3s;
                }

                header > nav button:hover {
                    background: #1b1b1b1a;
                }

                header > nav button:active {
                    background: #1b1b1b2f;
                }

                .toggle-menu {
                    display: none !important;
                }

                .toggle-menu :global(svg) {
                    display: flex;
                    font-size: 1.25em;
                }

                @media only screen and (max-width: 768px) {
                    nav.collapsed {
                        width: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        overflow: hidden;
                        max-height: 0;
                        -moz-transition-duration: 0.4s;
                        -webkit-transition-duration: 0.4s;
                        -o-transition-duration: 0.4s;
                        transition-duration: 0.4s;
                        -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
                        -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
                        -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
                        transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
                    }

                    nav.is-expanded {
                        overflow: hidden;
                        max-height: 500px; /* approximate max height */
                        -moz-transition-duration: 0.4s;
                        -webkit-transition-duration: 0.4s;
                        -o-transition-duration: 0.4s;
                        transition-duration: 0.4s;
                        -moz-transition-timing-function: ease-in;
                        -webkit-transition-timing-function: ease-in;
                        -o-transition-timing-function: ease-in;
                        transition-timing-function: ease-in;
                    }

                    header > nav button {
                        cursor: context-menu;
                    }

                    .toggle-menu {
                        appearance: none;
                        border: none;
                        outline: none;
                        display: inline-block !important;
                        background: #fff;
                        color: #3d4246;
                        margin: 0;
                        padding: 12px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        position: absolute;
                        top: 0px;
                        right: 0px;
                        cursor: pointer;
                        transition: 0.3s;
                    }

                    header > nav button:hover {
                        background: none;
                    }

                    header > nav button:active,
                    .toggle-menu:active {
                        background: #1b1b1b2f;
                    }
                }
            `}</style>
        </>
    )
}

export default Menu
