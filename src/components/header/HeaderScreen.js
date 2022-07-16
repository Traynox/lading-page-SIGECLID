import React from 'react'

const HeaderScreen = () => {
    return (
        <header className="hero">
            <div className="hero__wave"></div>
            <nav className="nav container">
                <figure className="nav__logo">
                    <img src={require("../../images/logo_1.png")} className="nav__img"/>
                </figure>
                <a href="#3" className="nav__link">Contacto</a>
                <a href="#3" className="nav__link">Nosotros</a>
                <a href="#3" className="nav__link">Planes</a>
            </nav>

            <section className="hero__main container">
                <img src={require("../../images/imagen2.png")} className="hero__img"/>
                    <h1 className="hero__title">Sistema de Gestión para Clínicas Dentales</h1>
                    <p className="hero__paragraph">Ayuda a las prácticas dentales pequeñas y grandes a optimizar cada aspecto de sus
                        tareas administrativas y clínicas diarias, desde la agenda hasta el procesamiento de los tratamientos
                        dentales. Con un manejo intuitivo que lo hace amigable a su uso.</p>
                    <a href="#3" className="hero__cta">Empecemos</a>
            </section>

        </header>
    )
}

export default HeaderScreen