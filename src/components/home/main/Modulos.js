import React from 'react'

const Modulos = () => {
    return (
        <>
            <section className="productive container">
                <figure className="productive__picture">
                    <img src={require("../../../images/moduloTratamientos.jpeg")} className="productive__img" />
                </figure>

                <div className="productive__texts">

                    <h3 className="productive__title">Manejo y control de la lista de Tratamientos</h3>

                    <p className="productive__paragraph">Con SIGECLID puedes llevar el control de todos los tratamientos disponibles en tu clinica.
                        Con una base de datos robusta que garantiza la seguridad de la información.</p>

                    <p className="productive__paragraph">Registro, Consulta, Actualizacion, Eliminacion</p>

                </div>
            </section>
            <section className="productive container">
                <div className="productive__texts rigth">

                    <h3 className="productive__title">Gestion Total de los Empleados</h3>

                    <p className="productive__paragraph">De la misma forma, se cuenta con un modulo especial para el control de los empleados que
                        permite llevar un orden y mayor eficiencia de la informacion y por ende las personas encargadas de prestar los servicios en
                        su clinica.</p>

                    <p className="productive__paragraph">Registro, Consulta, Actualizacion, Eliminacion</p>

                </div>
                <figure className="productive__picture">
                    <img src={require("../../../images/moduloEmpleados.jpeg")} className="productive__img" />
                </figure>
            </section>
            <section className="productive container">
                <figure className="productive__picture">
                    <img src={require("../../../images/moduloCitas.png")} className="productive__img" />
                </figure>
                <div className="productive__texts">

                    <h3 className="productive__title">Manejo y control de la Agenda</h3>

                    <p className="productive__paragraph">Con este modulo se consigue una agilizacion en el proceso de agendar una cita,
                        gracias a esta agenda se puede olvidar del papel y lapiz y manejar con total seguridad las citas de sus pacientes.</p>

                    <p className="productive__paragraph">Registro, Consulta, Actualizacion, Eliminacion</p>

                </div>
            </section>
            <section className="productive container">
                <div className="productive__texts rigth">

                    <h3 className="productive__title">Gestion Total de los Pacientes</h3>

                    <p className="productive__paragraph">Con SIGECLID pueden llevar un control de la lista de pacientes inscritos en tu clinica,
                     ya sea que poseen un tratamiento o pagaron un servicio rapido, siendo capaz de manejar su expediente personal.</p>

                    <p className="productive__paragraph">Registro, Consulta, Actualizacion, Eliminacion</p>

                </div>
                <figure className="productive__picture">
                    <img src={require("../../../images/moduloPacientes.jpeg")} className="productive__img" />
                </figure>
            </section>
        </>
    )
}

export default Modulos