import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Forms = () => {
  const contacthanndler = async () => {
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          senderid: Newvalue.email,
          name: Newvalue.name,
          subject: Newvalue.subject,
          text: Newvalue.message,
        }),
      });
      if (!response.ok) {
        console.log("connot send message");
      }
      alert("sent");
    } catch (err) {
      console.log(err);
    }
  };
  const [Newvalue, setnewvalue] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const contactInputhandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    if (field === "name") {
      setnewvalue((prev) => {
        return {
          name: value,
          message: prev.message,
          email: prev.email,
          subject: prev.subject,
        };
      });
    }
    if (field === "message") {
      setnewvalue((prev) => {
        return {
          name: prev.name,
          message: value,
          email: prev.email,
          subject: prev.subject,
        };
      });
    }
    if (field === "email") {
      setnewvalue((prev) => {
        return {
          name: prev.name,
          message: prev.message,
          email: value,
          subject: prev.subject,
        };
      });
    }
    if (field === "subject") {
      setnewvalue((prev) => {
        return {
          name: prev.name,
          message: prev.message,
          email: prev.email,
          subject: value,
        };
      });
    }
  };
  return (
    <form className="text-dark d-flex flex-column align-items-left gap-4 my-auto py-4 px-3">
      <div className="form-group">
        <label htmlFor="name" className="text-secondary mb-2">
          <h6>Your Name (required)</h6>
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={Newvalue.name}
          onChange={contactInputhandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-secondary mb-2">
          <h6>Your Email (required)</h6>
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={Newvalue.email}
          onChange={contactInputhandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="subject" className="text-secondary mb-2">
          <h6>Subject</h6>
        </label>
        <input
          type="text"
          className="form-control"
          name="subject"
          value={Newvalue.subject}
          onChange={contactInputhandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message" className="text-secondary">
          <h6>Message</h6>
        </label>
        <textarea
          className="form-control"
          name="message"
          rows="6"
          value={Newvalue.message}
          onChange={contactInputhandler}
        ></textarea>
      </div>
      <div className="container d-flex justify-content-end">
        <button
          type="button"
          className="btn btn-primary nav-item d-lg-inline px-4 py-2"
          onClick={contacthanndler}
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default Forms;
