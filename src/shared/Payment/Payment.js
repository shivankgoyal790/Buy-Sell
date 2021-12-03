import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

toast.configure();

const Payment = (props) => {
  const [product] = useState({
    name: props.itemname,
    price: props.price,
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
      number={product.price}
      name={product.name}
    >
      <button className="btn btn-primary" style={{ fontSize: "20px" }}>
        <FontAwesomeIcon icon={faDollarSign} />
        &nbsp; Buy This
      </button>
    </StripeCheckout>
  );
};

export default Payment;
