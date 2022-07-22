import React from 'react'

import Planes from './Planes';
import Modulos from './Modulos';
import Caracteristicas from './Caracteristicas';
import Contacto from './Contacto';
import Preguntas from './preguntasFrecuentes/Preguntas';

const MainScreen = () => {
    return (
        <main className="main">
            <Caracteristicas />

            <Modulos />

            <Planes />

            <Contacto />
            <Preguntas />
        </main>
    )
}

export default MainScreen