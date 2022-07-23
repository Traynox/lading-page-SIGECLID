import React from 'react'
import { scroll } from '../../../helpers/scroll'

const HeaderScreen = () => {
    return (
        <header className="hero">
            <div className="hero__wave"></div>

            {/* <Navbar /> */}
            <section className="hero__main container">
                <img src={require("../../../images/imagen2.png")} className="hero__img" />
                <h1 className="hero__title">Sistema de Gestión para Clínicas Dentales</h1>
                <p className="hero__paragraph">Ayuda a las prácticas dentales pequeñas y grandes a optimizar cada aspecto de sus
                    tareas administrativas y clínicas diarias, desde la agenda hasta el procesamiento de los tratamientos
                    dentales. Con un manejo intuitivo que lo hace amigable a su uso. Te ofrecemos un conjunto de herramientas
                    modernas para ayudarte a gestionar de manera perfecta tu consultorio.</p>
                <button href="#3" className="hero__cta" onClick={() => { scroll(3400) }}>Empecemos</button>
            </section>

        </header>
    )
}

export default HeaderScreen