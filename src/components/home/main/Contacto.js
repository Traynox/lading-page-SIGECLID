import React, { useRef } from 'react'
import emailjs from 'emailjs-com';
const Contacto = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_nkymj7m",
            "template_uyk4fzg",
            form.current,
            "CE1VJd_qjnk1oJ5AY"
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );
    };
    return (
        <section className="join">
            <div className="join__container container">
                <div className="login-box">
                    <h2>CONTACTO</h2>
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="user-box">
                            <input type="text" name="name" required />
                            <label>Nombre</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="last_name" required />
                            <label>Apellidos</label>
                        </div>
                        <div className="user-box">
                            <input type="tel" name="phone" required />
                            <label>Numero</label>
                        </div>
                        <div className="user-box">
                            <input type="email" name="email" required/>
                            <label>Correo Electronico</label>
                        </div>
                        <div className="user-box">
                            <textarea name="message" placeholder="Mensaje!" required></textarea>
                        </div>
                        <button type='submit' className="boton" href="#3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto