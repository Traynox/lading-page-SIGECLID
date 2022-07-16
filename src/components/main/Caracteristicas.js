import React from 'react'
import icon_acces from "../../images/icon-access-anywhere.svg";
import icon_security from "../../images/icon-security.svg";
import icon_collaboration from "../../images/icon-collaboration.svg";
import icon_any_file from "../../images/icon-any-file.svg";
const Caracteristicas = () => {
    return (
        <section className="about container">

            <article className="about__item">
                <figure className="about__picture">
                    <img src={icon_acces} alt="about__img" />
                </figure>

                <h3 className="about__title">Orden y control de las citas</h3>
                <p className="about__paragraph">Le solucionamos la tediosa gestion de la agenda manejando las citas de cada
                    doctor</p>

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
                <p className="about__paragraph">Aquí el textito</p>

            </article>

            <article className="about__item">
                <figure className="about__picture">
                    <img src={icon_any_file} alt="about__img" />
                </figure>

                <h3 className="about__title">Access your files anywhere</h3>
                <p className="about__paragraph">Aquí el textito</p>

            </article>

        </section>
    )
}

export default Caracteristicas