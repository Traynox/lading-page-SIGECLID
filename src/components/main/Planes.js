import React from 'react'

const Planes = () => {
    return (
        <section className="contenedor">
            <div className="tabla">
                <h2>Básico</h2>
                <img src={require("../../images/1white.png")} alt="" />
                <h3><sup>₡</sup> 30</h3>
                <p>Paga ahora y recibe un 30% en tu hosting y dominios</p>
                <div>
                    <h3>Funcionalidades</h3>
                    <ul className="check-list">
                        <li>Citas</li>
                        <li>Pacientes</li>
                        <li>Empleados</li>
                    </ul>
                </div>
                <a href="3" className="boton">Cotizar</a>
            </div>
            <div className="tabla">
                <h2>Estándar</h2>
                <img src={require("../../images/2white.png")} alt="" />
                <h3><sup>₡</sup> 60</h3>
                <p>Paga ahora y recibe un 30% en tu hosting y dominios</p>
                <div>
                    <h3>Incluye Basico mas</h3>
                    <ul className="check-list">
                        <li>Tratamientos</li>
                        <li>Reportes</li>
                        <li>Modulo 6</li>
                    </ul>
                </div>
                <a href="3" className="boton">Cotizar</a>
            </div>
            <div className="tabla">
                <h2>Premium</h2>
                <img src={require("../../images/3white.png")} alt="" />
                <h3><sup>₡</sup> 90</h3>
                <p>Paga ahora y recibe un 30% en tu hosting y dominios</p>
                <div>
                    <h3>Incluye estandar mas</h3>
                    <ul className="check-list">
                        <li>Otros</li>
                        <li>Modulo 6</li>

                    </ul>
                </div>
                <a href="3" className="boton">Cotizar</a>
            </div>
        </section>
    )
}

export default Planes