import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import "./Additem.css";

const Updateitem = () => {
  const itemid = useParams().itemid;
  const history = useNavigate();
  const [Newvalue, setnewvlue] = useState({
    name: "",
    price: "",
    old: "",
    description: "",
    location: "",
  });
  const changeinputhandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    if (name === "name") {
      setnewvlue((prev) => {
        return {
          name: value,
          price: prev.price,
          old: prev.old,
          description: prev.description,
          location: prev.location,
        };
      });
    }
    if (name === "price") {
      setnewvlue((prev) => {
        return {
          name: prev.name,
          price: value,
          old: prev.old,
          description: prev.description,
          location: prev.location,
        };
      });
    }

    if (name === "old") {
      setnewvlue((prev) => {
        return {
          name: prev.name,
          price: prev.price,
          old: value,
          description: prev.description,
          location: prev.location,
        };
      });
    }

    if (name === "description") {
      setnewvlue((prev) => {
        return {
          name: prev.name,
          price: prev.price,
          old: prev.old,
          description: value,
          location: prev.location,
        };
      });
    }

    if (name === "location") {
      setnewvlue((prev) => {
        return {
          name: prev.name,
          price: prev.price,
          old: prev.old,
          description: prev.description,
          location: value,
        };
      });
    }
  };

  const updateitemhandler = async () => {
    try {
      await fetch(`http://localhost:5000/api/${itemid}/edititem`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: Newvalue.name,
          sellprice: Newvalue.price,
          age: Newvalue.old,
          description: Newvalue.description,
          location: Newvalue.location,
        }),
      });
      history("/");
    } catch (err) {
      console.log("cannot update item try again");
    }
  };
  return (
    <div className="sell-flex-container">
      <div className="sell-container shadow-lg border-0 py-4">
        <h1 className="logo-container">
          <p className="sell-logo">Buy&Sell</p>
        </h1>
        <div className="item-details">
          <input type="file"></input>
          <input
            type="text"
            value={Newvalue.name}
            onChange={changeinputhandler}
            name="name"
            placeholder="Product Name"
          />
          <input
            type="text"
            value={Newvalue.price}
            onChange={changeinputhandler}
            name="price"
            placeholder="Sell Price"
          ></input>
          <input
            type="text"
            value={Newvalue.old}
            onChange={changeinputhandler}
            name="old"
            placeholder="How Old is Your Product"
          ></input>
          <input
            type="text"
            value={Newvalue.description}
            onChange={changeinputhandler}
            name="description"
            placeholder="Description"
          ></input>
          <input
            type="text"
            value={Newvalue.location}
            onChange={changeinputhandler}
            name="location"
            placeholder="location"
          ></input>
          <button
            className="submit_sellbtn"
            type="submit"
            onClick={updateitemhandler}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updateitem;
