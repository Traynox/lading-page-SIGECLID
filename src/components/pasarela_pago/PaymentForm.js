import * as React from 'react';
import Review from './Review';
import { Elements, CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Box, Button, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { setMensajeConfirmacion } from '../../actions/checkout';



const stripePromise = loadStripe("pk_test_51LNSszB2ovn6QVVE5i1syhpKs075K5AdS9IlwNDFFx5WWNW91wxHnxEkH3ZKHRspoJIhew6SvW9gMa2KBGl5odBP0085MKeuH5");
const card_element = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240,57,122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      "focus": {
        color: "#303238"
      },
    },
  },
};
const FormularioPago = ({ handleNext, handleBack }) => {
  const { producto } = useSelector((state) => state.cesta);
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    });
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post("http://localhost:3001/api/checkout", {
          id,
          amount: producto[0].dolar * 100
        });
        dispatch(setMensajeConfirmacion(data));
        handleNext();
        console.log(data);
      } catch (error) {
        console.log(error);
        dispatch(setMensajeConfirmacion(error));
        handleNext();
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={card_element} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>

        <Button sx={{ mt: 3, ml: 1 }}
          type='button'
          onClick={handleBack}
        >
          Volver
        </Button>
        <Button
          disabled={false}
          type='submit'
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
        >
          Pagar ₡ {producto[0].precio}
        </Button>
      </Box>
    </form>
  )
}

export default function PaymentForm({ handleNext, handleBack }) {
  return (
    <React.Fragment>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0' }}>
        Metodo de Pago
      </Typography>
      <Elements stripe={stripePromise}>
        <FormularioPago
          handleNext={handleNext}
          handleBack={handleBack}
        />
      </Elements>
    </React.Fragment>
  );
} 