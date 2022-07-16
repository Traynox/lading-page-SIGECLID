import React from 'react'

import Planes from './Planes';
import Modulos from './Modulos';
import Caracteristicas from './Caracteristicas';
import Contacto from './Contacto';

const MainScreen = () => {
    return (
        <main className="main">
            <Caracteristicas />

            <Modulos />

            <Planes />

            <Contacto />

        </main>
    )
}

export default MainScreen