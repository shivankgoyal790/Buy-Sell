import React, { useCallback, useContext, useState } from "react";
import "./Additem.css";
import Spinner from "../components/loadingspinner/Spinner";
import { useNavigate } from "react-router";
import { AuthContext } from "../shared/Authcontext";
import Imageupload from "../components/Imageupload/Imageupload";
const Additem = () => {
  const Auth = useContext(AuthContext);
  const history = useNavigate();
  const [isloading, setisloading] = useState(false);
  const [Newvalue, setnewvlue] = useState({
    name: "",
    price: "",
    old: "",
    description: "",
    image: undefined,
    location: "",
  });

  const inputimagehandler = useCallback((value) => {
    setnewvlue((prev) => {
      return {
        name: prev.name,
        description: prev.description,
        image: value,
        location: prev.location,
        old: prev.old,
        price: prev.price,
      };
    });
  }, []);
  const changehandler = (event) => {
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
          image: prev.image,
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
          image: prev.image,
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
          image: prev.image,
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
          image: prev.image,
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
          image: prev.image,
        };
      });
    }
  };
  const Additemhandler = async (event) => {
    event.preventDefault();
    setisloading(true);
    let e = document.getElementById("typedropdown");
    let mytype = e.options[e.selectedIndex].text;
    try {
      const formdata = new FormData();
      formdata.append("name", Newvalue.name);
      formdata.append("description", Newvalue.description);
      formdata.append("image", Newvalue.image);
      formdata.append("location", Newvalue.location);
      formdata.append("creator", Auth.userId);
      formdata.append("sellprice", Newvalue.price);
      formdata.append("age", Newvalue.old);
      formdata.append("type", mytype);
      const response = await fetch("http://localhost:5000/api/sell", {
        method: "POST",
        body: formdata,
      });
      if (!response.ok) {
        setisloading(false);
        throw new Error("check your data");
      }
      history("/");
      setisloading(false);
    } catch (err) {
      setisloading(false);
      console.log("try again later");
    }
  };
  return (
    <div className="sell-flex-container">
      {isloading && <Spinner />}
      {!isloading && (
        <div className="sell-container p-3">
          <h1 className="logo-container">
            <p className="sell-logo">Buy&Sell</p>
          </h1>
          <form className="px-5" onSubmit={Additemhandler}>
            <div className="form-group">
              <Imageupload
                id="image"
                name="image"
                oninput={inputimagehandler}
              />
            </div>
            <div className="form-group mt-1">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={changehandler}
                className="form-control py-2"
                name="name"
                value={Newvalue.name}
                placeholder="item name"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="price">Sell Price</label>
              <input
                type="text"
                onChange={changehandler}
                className="form-control py-2"
                name="price"
                value={Newvalue.price}
                placeholder="Enter Your item Sellprice"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                onChange={changehandler}
                className="form-control py-2"
                name="description"
                value={Newvalue.description}
                placeholder="Enter Your item details"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                onChange={changehandler}
                className="form-control py-2"
                name="location"
                value={Newvalue.location}
                placeholder="Enter Your item location"
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="old">Age</label>
              <input
                type="text"
                onChange={changehandler}
                className="form-control py-2"
                name="old"
                value={Newvalue.old}
                placeholder="How old is your item"
              />
            </div>
            <label htmlFor="selecttype" className="mt-2">
              Type
            </label>
            <select
              className="form-select form-select-lg"
              aria-label=".form-select-lg example"
              name="selecttype"
              id="typedropdown"
              style={{ fontSize: "16px" }}
            >
              <option selected>Open this select menu</option>
              <option value="automobiles">Automobiles</option>
              <option value="mobiles">Mobiles</option>
              <option value="Electronics">Electronics</option>
            </select>
            <button type="submit" className="btn btn-danger text-center mt-4">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Additem;
