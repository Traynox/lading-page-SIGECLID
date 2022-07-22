import { Typography, Button } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setCheckout } from '../../actions/checkout';
import { setCesta } from '../../actions/cesta';

const Confirmacion = () => {
    const dispatch = useDispatch();
    const { mensaje } = useSelector((state) => state.checkout);
    console.log(mensaje);
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>

                {mensaje.mensaje}! Dirigase a su correo electronico para terminar el proceso de registro.
            </Typography>
            <Button sx={{ mt: 3, ml: 1 }}
                component={Link} to="/"
                onClick={() => {
                    dispatch(setCheckout());
                    dispatch(setCesta());
                }}
            >
                Volver
            </Button>
        </React.Fragment>
    )
}

export default Confirmacion