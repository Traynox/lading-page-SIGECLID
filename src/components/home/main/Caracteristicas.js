import React from 'react'
import icon_acces from "../../../images/icon-access-anywhere.svg";
import icon_security from "../../../images/icon-security.svg";
import icon_collaboration from "../../../images/icon-collaboration.svg";
import icon_any_file from "../../../images/icon-any-file.svg";
const Caracteristicas = () => {
    return (
        <section className="about container">

            <article className="about__item">
                <figure className="about__picture">
                    <img src={icon_acces} alt="about__img" />
                </figure>

                <h3 className="about__title">Fácil de utilizar</h3>
                <p className="about__paragraph">La herramienta más amigable y sencilla para odontólogos, que además cuenta con un gran
                    equipo humano de soporte y postventa disponible para ti, para siempre.</p>

            </article>

            <article className="about__item">
                <figure className="about__picture">
                    <img src={icon_security} alt="about__img" />
                </figure>

                <h3 className="about__title">Seguridad</h3>
                <p className="about__paragraph">Contamos con una gestion de usuarios de alta seguiridad, que garantiza la
                    privacidad de la informacion</p>

            </article>

            <article className="about__item">
                <figure className="about__picture">
                    <img src={icon_collaboration} alt="about__img" />
                </figure>

                <h3 className="about__title">Ahorro y optimizacion del tiempo</h3>
                <p className="about__paragraph">Cuenta con funcionalidades que te permiten optimizar tiempos de atención y administración,
                    desde la generación de presupuestos y confirmación de citas automáticas.</p>

            </article>

            <article className="about__item">
                <figure className="about__picture">
                    <img src={icon_any_file} alt="about__img" />
                </figure>

                <h3 className="about__title">Nuevas maneras de crecer</h3>
                <p className="about__paragraph">Posee innovadoras funcionalidades, que te permiten estar más cerca de tus pacientes, fidelizándolos
                    y diferenciando tu calidad de servicio respecto a tus colegas.</p>

            </article>

        </section>
    )
}

export default Caracteristicas