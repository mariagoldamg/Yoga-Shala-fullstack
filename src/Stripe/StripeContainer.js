
import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51Mo1S7A3p2aZPaUWGNHUjxSKflHLUx3UURyCX0f9pA9bm1T6VhTq25U7p7ui7TaW5E1qaz6JTq9vpVgTU8eXX9Dc00m2Eqbe51";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;