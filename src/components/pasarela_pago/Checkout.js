import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './Address_Form';
import PaymentForm from './PaymentForm';
import FooterScreen from '../home/footer/FooterScreen';
import Confirmacion from './Confirmacion';

const steps = ['Informacion Empresa', 'Detalles Pago', 'Confirmación'];

const theme = createTheme({
  palette: {
    primary: {
      main: '#003e47',
    },
    background: {
      default: "#67a5ad"
    }
  },
});

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const Form = () => {

  }
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Verificacion
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {
            activeStep === 0 ?
              <AddressForm
                handleNext={handleNext}
              />
              : activeStep === 1 ?
                <PaymentForm
                  handleNext={handleNext}
                  handleBack={handleBack}
                />
                :
                <Confirmacion />
          }


        </Paper>
      </Container>
      <FooterScreen />
    </ThemeProvider>
  );
}