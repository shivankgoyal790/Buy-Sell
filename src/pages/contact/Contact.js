import React from "react";
import Forms from "./Forms";

const Contact = () => {
  return (
    <div className="container col-lg-6 col-md-8 col-12 bg-primary position-relative mx-auto  mt-5 pb-5">
      <h1 className="text-center text-white p-3">Contact Us</h1>
      <div className="col-lg-7 col-md-8 col-12 mx-auto bg-white shadow-lg">
        <Forms />
      </div>
    </div>
  );
};

export default Contact;
