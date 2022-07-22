import React from 'react'

const Modulos = () => {
    return (
        <>
            <section className="productive container">
                <figure className="productive__picture">
                    <img src={require("../../../images/moduloTratamientos.jpeg")} className="productive__img" />
                </figure>

                <div className="productive__texts">

                    <h3 className="productive__title">Gestion Total de los Diferentes Tratamientos</h3>

                    <p className="productive__paragraph">Con SIGECLID puedes llevar el control de todos los tratamientos.
                        disponibles en tu clinica.</p>

                    <p className="productive__paragraph">Registro, Consulta, Actualizacion, Eliminacion</p>

                </div>
            </section>
            <section className="productive container">
                <div className="productive__texts rigth">

                    <h3 className="productive__title">Gestion Total de los Empleados</h3>

                    <p className="productive__paragraph">De la misma forma, con SIGECLID vas a tener un control total de los
                        empleados.</p>

                    <p className="productive__paragraph">Registro, Consulta, Actualizacion, Eliminacion</p>

                </div>
                <figure className="productive__picture">
                    <img src={require("../../../images/moduloEmpleados.jpeg")} className="productive__img" />
                </figure>
            </section>
        </>
    )
}

export default Modulos