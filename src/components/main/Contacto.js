import React from 'react'

const Contacto = () => {
    return (
        <section className="join">
            <div className="join__container container">
                <div className="login-box">
                    <h2>CONTACTANOS</h2>
                    <form>
                        <div className="user-box">
                            <input type="text" name="" required="" />
                            <label>Nombre</label>
                        </div>
                        <div className="user-box">
                            <input type="text" name="" required="" />
                            <label>Apellidos</label>
                        </div>
                        <div className="user-box">
                            <input type="tel" name="" required="" />
                            <label>Numero</label>
                        </div>
                        <div className="user-box selector">
                            <select name="select">
                                <option value="value1" >Seleciona el motivo del contacto*</option>
                                <option value="value2">Conocer mas de SIGECLID</option>
                                <option value="value3">Estoy cotizando opciones</option>
                                <option value="value3">Quiero contratar</option>

                            </select>
                        </div>

                        <a className="boton" href="#3">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Enviar
                        </a>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto