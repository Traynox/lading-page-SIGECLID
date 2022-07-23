import React from 'react'
import { scroll } from '../../../helpers/scroll'

const Navbar = () => {
    
    return (
        <header className="hero">
            <nav className="nav container">
                <figure className="nav__logo">
                    <img src={require("../../../images/logo_1.png")} className="nav__img" />
                </figure>
                <button onClick={() => { scroll(3400) }} className="nav__link">Planes</button>
                <button onClick={() => { scroll(4172) }} className="nav__link">Contacto</button>
                <button onClick={() => { scroll(3400) }} className="nav__link">Nosotros</button>
            </nav>
        </header>
    )
}

export default Navbar