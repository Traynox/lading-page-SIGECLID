import React from 'react'

const Navbar = () => {
    return (
        <header className="hero">
            <nav className="nav container">
                <figure className="nav__logo">
                    <img src={require("../../../images/logo_1.png")} className="nav__img" />
                </figure>
                <a href="#3" className="nav__link">Contacto</a>
                <a href="#3" className="nav__link">Nosotros</a>
                <a href="#3" className="nav__link">Planes</a>
            </nav>
        </header>
    )
}

export default Navbar