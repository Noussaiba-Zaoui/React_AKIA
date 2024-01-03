import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import StripeCheckout from 'react-stripe-checkout';
const Payment = () => {
  const onToken = (token) => {
    console.log(token);
  }
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Payment gateway" />
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51ONxJXIJG6lEhdxWDIRP1Ylh3epVcOKmLs7uN9THNaOyT2xWEuZb1ouAbpCGLFhe1PymPJUW2tTaXhOkCcoRB6E300BftRFTxR"
      />
    </div>
  );
};

export default Payment;
