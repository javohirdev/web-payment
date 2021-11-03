import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from './PaymentForm';

const PUB_KEY = "pk_test_51JoWvPBKQkjOGukko8Ivr3DTJIwPLZZ0tOikrFiFpQxSUTJuIf2gsrhNvuOp6AcLWlw2mLMAj10gKg1r24udZyc200IjD5dyEK"

const stripeTestPromise = loadStripe(PUB_KEY);

export default function StripeContainer() {
    return(
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )
}