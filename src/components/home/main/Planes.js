import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setProducto } from '../../../actions/cesta';

const Planes = () => {
    const dispatch = useDispatch();
    var myHeaders = new Headers();
    myHeaders.append("apikey", "I1gwB0hpYgL1T2qk0D2GaBTtusXxkhOX");

    var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };
    return (
        <section className="contenedor">
            <div className="tabla">
                <h2>Básico</h2>
                <img src={require("../../../images/1white.png")} alt="" />
                <h3><sup>$</sup> 30</h3>
                <p>Ideal para dar incio a tu clinica dental</p>
                <div className='funcionalidad'>
                    <h3>Funcionalidades</h3>
                    <ul className="check-list">
                        <li>Citas</li>
                        <li>Pacientes</li>
                        <li>Empleados</li>
                        <li>Tratamientos</li>
                    </ul>
                </div>
                <Link
                    className="boton"
                    to={`/checkout`}
                    onClick={() => {
                        dispatch(setProducto({ idPlan: 1, precio: 30 }));
                    }}
                >
                    Pagar
                </Link>
                {/* <a href="3" className="boton">Pagar</a> */}
            </div>
            <div className="tabla">
                <h2>Premium</h2>
                <img src={require("../../../images/3white.png")} alt="" />
                <h3><sup>$</sup> 35</h3>
                <p>Gestiona toda la información referente a tu clinica dental.</p>
                <div className='funcionalidad'>
                    <h3>Incluye Plan Basico +</h3>
                    <ul className="check-list">
                        <li>Reportes</li>

                    </ul>
                </div>
                <Link
                    className="boton"
                    to={`/checkout`}
                    onClick={() => {
                        dispatch(setProducto({ idPlan: 2, precio: 35 }));
                    }}
                >
                    Premium
                </Link>
                {/* <a href="3" className="boton">Pagar</a> */}
            </div>
        </section>
    )
}

export default Planes