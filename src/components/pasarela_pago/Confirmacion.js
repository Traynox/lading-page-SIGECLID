import React from 'react'
import { useSelector } from 'react-redux'

const Confirmacion = () => {
    const { mensaje } = useSelector((state) => state.checkout);

    return (
        <div>{mensaje.mensaje}</div>
    )
}

export default Confirmacion