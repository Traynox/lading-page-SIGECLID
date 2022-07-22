import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useForm, FormProvider } from 'react-hook-form';
import DatosInput from './DatosInput';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setDatosPersonales } from '../../actions/checkout.js';
export default function Address_Form({ handleNext }) {

  const methods = useForm();
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos Personales
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => {
          dispatch(setDatosPersonales(data));
          handleNext();
        })}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="firstName"
                label="Nombre"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="lastName"
                label="Apellidos"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="cedula"
                label="Cedula"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="email"
                label="Correo"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="phone"
                label="# Telefono"
                type="number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="canton"
                label="Canton"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="provincia"
                label="Provincia"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatosInput
                required
                name="pais"
                label="Pais"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button sx={{ mt: 3, ml: 1 }}
              component={Link} to="/"
            >
              Volver
            </Button>
            <Button
              type='submit'
              variant="contained"
              sx={{ mt: 3, ml: 1 }}
            >
              Siguiente
            </Button>
          </Box>
        </form>
      </FormProvider>


    </React.Fragment>
  );
}