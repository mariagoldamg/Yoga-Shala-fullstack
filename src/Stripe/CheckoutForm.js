import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";





export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [messageSuccess, setMessageSuccess] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      try {
        const { id } = paymentMethod;
        const response = await axios.post(
          "https://yoga-shala-backend.onrender.com/stripe/charge",
          {
            amount: 8000,
            id: id,
          }
        );

        console.log("Stripe 35 | data", response.data.success);
        if (response.data.success) {
          console.log("CheckoutForm.js 25 | payment successful!");
          setMessageSuccess(true)
        }
      } catch (error) {
        console.log("CheckoutForm.js 28 | ", error);
      }
    } else {
      console.log(error.message);
    }
  };



  return (<div>
    <div> 
{!messageSuccess ?
    <form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
        <h5>Please enter your card information:</h5>
        <br></br>
      <CardElement />
      <br></br>
      <button className="deleteBtn">Pay</button>
      <br></br>
      <br></br>
    
    </form>
:
    <div>
<h1>Your payment was successful!
</h1>
    </div>
    
}

    </div>
</div>
  );
};