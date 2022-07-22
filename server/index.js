const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const stripeKey = new Stripe("sk_test_51LNSszB2ovn6QVVE4whsxKa07i1jccOdpjGyz7hueRcpctbjtyYDKzDZULIQctJeR5UEbWntehcLDdB8MvYN1mYP00sh42gknY");
const app = express();

// app.use(cors({ origin: "http://localhost: 3000"}));
app.use(cors());
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
    const { id, amount } = req.body;
    try {
        const payment = await stripeKey.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Product",
            payment_method: id,
            confirm: true
        });
        console.log(payment);
        return res.status(200).json({ mensaje: "Pago Exitoso" })
    } catch (error) {
        return res.json({ mensaje: error.raw.message })

    }
});

app.listen(3001, () => console.log('Server port', 3001));