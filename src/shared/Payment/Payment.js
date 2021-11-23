import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

toast.configure();

const Payment = (props) => {
  const [product] = useState({
    name: "taj mahal",
    price: 10000,
  });

  async function handleToken(token, addresses) {
    const response = await axios.post(
      "https://799kd.sse.codesandbox.io/checkout",
      { token, product }
    );
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <StripeCheckout
      stripeKey="pk_test_51J0GIcSENvjXnPl03h2xBBIg1ZHX70Ux2bmaJl7cGmnqM7LAyU2ZcxlkwtZenojY2hYrkTIgMjgClOB41Rpnn95f00MQ2dI0rT"
      token={handleToken}
      billingAddress
      shippingAddress
      amount={1000}
      name={"product name"}
    />
  );
};

export default Payment;
