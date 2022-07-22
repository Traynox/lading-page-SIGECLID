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
                <h3><sup>₡</sup> 30.000</h3>
                <p>Paga ahora y recibe un 30% en tu hosting y dominios</p>
                <div>
                    <h3>Funcionalidades</h3>
                    <ul className="check-list">
                        <li>Citas</li>
                        <li>Pacientes</li>
                        <li>Empleados</li>
                    </ul>
                </div>
                <Link
                    className="boton"
                    to={`/checkout`}
                    onClick={() => {
                        fetch("https://api.apilayer.com/fixer/convert?to=USD&from=CRC&amount=30000", requestOptions)
                            .then(response => response.json())
                            .then(result => {
                                dispatch(setProducto({ nombre: 'Basico', precio: 30000, dolar: result.result }));
                            })
                            .catch(error => console.log('error', error));
                    }}
                >
                    Pagar
                </Link>
                {/* <a href="3" className="boton">Pagar</a> */}
            </div>
            <div className="tabla">
                <h2>Estándar</h2>
                <img src={require("../../../images/2white.png")} alt="" />
                <h3><sup>₡</sup> 50.000</h3>
                <p>Paga ahora y recibe un 30% en tu hosting y dominios</p>
                <div>
                    <h3>Incluye Basico mas</h3>
                    <ul className="check-list">
                        <li>Tratamientos</li>
                        <li>Reportes</li>
                        <li>Modulo 6</li>
                    </ul>
                </div>
                <Link
                    className="boton"
                    to={`/checkout`}
                    onClick={() => {
                        fetch("https://api.apilayer.com/fixer/convert?to=USD&from=CRC&amount=50000", requestOptions)
                            .then(response => response.json())
                            .then(result => {
                                dispatch(setProducto({ nombre: 'Estandar', precio: 50000, dolar: result.result }));
                                console.log(result);
                            })
                            .catch(error => console.log('error', error));
                    }}
                >
                    Pagar
                </Link>
                {/* <a href="3" className="boton">Pagar</a> */}
            </div>
            <div className="tabla">
                <h2>Premium</h2>
                <img src={require("../../../images/3white.png")} alt="" />
                <h3><sup>₡</sup> 70.000</h3>
                <p>Paga ahora y recibe un 30% en tu hosting y dominios</p>
                <div>
                    <h3>Incluye estandar mas</h3>
                    <ul className="check-list">
                        <li>Otros</li>
                        <li>Modulo 6</li>

                    </ul>
                </div>
                <Link
                    className="boton"
                    to={`/checkout`}
                    onClick={() => {
                        fetch("https://api.apilayer.com/fixer/convert?to=USD&from=CRC&amount=70000", requestOptions)
                            .then(response => response.json())
                            .then(result => {
                                dispatch(setProducto({ nombre: 'Premium', precio: 70000, dolar: result.result }));
                                console.log(result);
                            })
                            .catch(error => console.log('error', error));
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