import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authcontext";
import Spinner from "../../components/loadingspinner/Spinner";
import {
  validate,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../Utils/validators";
import { VALIDATOR_EMAIL } from "../Utils/validators";
import "./Auth.css";
const Auth = () => {
  const [isloginmode, setisLoginmode] = useState(true);
  const [isloading, setisloading] = useState(false);
  const [Isvalid, setIsvalid] = useState(true);
  const [passvalid, setpassvalid] = useState(true);
  const [uservalid, setuservalid] = useState(true);
  const [isvalidmob, setvalidmob] = useState(true);
  const [error, seterror] = useState(false);
  const [Newvalue, setnewvalue] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });
  const Auth = useContext(AuthContext);
  const History = useNavigate();
  const Inputhandler = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    if (field === "name") {
      setnewvalue((prev) => {
        return {
          name: value,
          mobile: prev.mobile,
          email: prev.email,
          password: prev.password,
        };
      });
    }
    if (field === "mobile") {
      setnewvalue((prev) => {
        return {
          name: prev.name,
          mobile: value,
          email: prev.email,
          password: prev.password,
        };
      });
    }
    if (field === "email") {
      setnewvalue((prev) => {
        return {
          name: prev.name,
          mobile: prev.mobile,
          email: value,
          password: prev.password,
        };
      });
    }
    if (field === "password") {
      setnewvalue((prev) => {
        return {
          name: prev.name,
          mobile: prev.mobile,
          email: prev.email,
          password: value,
        };
      });
    }
  };

  const Changemode = () => {
    if (isloginmode) setisLoginmode(false);
    else setisLoginmode(true);
  };

  const Authsubmithandler = async (event) => {
    event.preventDefault();
    setuservalid(true);
    setpassvalid(true);
    setIsvalid(true);
    const valid1 = validate(Newvalue.email, [VALIDATOR_EMAIL()]);
    const valid2 = validate(Newvalue.password, [VALIDATOR_MINLENGTH(5)]);
    const valid3 = validate(Newvalue.name, [VALIDATOR_REQUIRE()]);
    const valid4 = validate(Newvalue.mobile, [VALIDATOR_MINLENGTH(10)]);
    if (!valid1) {
      setIsvalid(false);
    }
    if (!valid2) {
      setpassvalid(false);
    }
    if (!valid3) {
      setuservalid(false);
    }
    if (!valid4) {
      setvalidmob(false);
    }

    if (isloginmode) {
      seterror(false);
      setisloading(true);
      try {
        const response = await fetch("http://localhost:5000/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: Newvalue.email,
            password: Newvalue.password,
          }),
        });
        if (!response.ok) {
          seterror(true);
          setisloading(false);
          throw new Error("cannot login");
        }
        const responsedata = await response.json();
        Auth.login(responsedata.user._id);
        setisloading(false);
        History("/");
      } catch (err) {
        setisloading(false);
        seterror(true);
        console.log(err);
        console.log("cannot log in");
      }
    } else {
      seterror(false);
      setisloading(true);
      try {
        const response = await fetch("http://localhost:5000/users/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: Newvalue.email,
            password: Newvalue.password,
            name: Newvalue.name,
            mobile: Newvalue.mobile,
          }),
        });
        if (!response.ok) {
          setisloading(false);
          throw new Error("cannot signup");
        }
        Auth.login();
        setisloading(false);
        History("/");
      } catch (err) {
        setisloading(false);
        console.log(err);
        console.log("cannot signup");
      }
    }
  };
  return (
    <div className="auth">
      {isloading && (
        <div
          className="position-absolute top-25"
          style={{ zIndex: "99", left: "50%" }}
        >
          <Spinner />
        </div>
      )}
      <div className="auth-page shadow-lg border-0 d-flex flex-lg-row flex-column mt-5">
        <div className="company-desc p-lg-0 py-3">
          <h1 className="logo">Buy&Sell</h1>
        </div>
        <form onSubmit={Authsubmithandler} className="formdata">
          <div className="auth-container">
            <h1>AUTHENTICATE</h1>
            <div className="input-container">
              {error && (
                <h3 className="m-0 text-center text-danger">
                  Incorrect credentials
                </h3>
              )}
              <label
                htmlFor="name"
                style={{ display: isloginmode ? "none" : "block" }}
              >
                Name{" "}
                {!uservalid && (
                  <p className="text-danger m-0">*please enter a name</p>
                )}
              </label>
              <input
                className="login-input"
                type="text"
                style={{ display: isloginmode ? "none" : "block" }}
                name="name"
                placeholder="Enter your Name"
                value={Newvalue.name}
                onChange={Inputhandler}
              ></input>

              <br></br>
              <label
                htmlFor="mobile"
                style={{ display: isloginmode ? "none" : "block" }}
              >
                Mobile
                {!isvalidmob && (
                  <p className="text-danger m-0">
                    *please enter 10 digit mobile no.
                  </p>
                )}
              </label>
              <input
                className="login-input"
                type="text"
                style={{ display: isloginmode ? "none" : "block" }}
                name="mobile"
                placeholder="Contact number"
                value={Newvalue.mobile}
                onChange={Inputhandler}
              ></input>

              <br></br>

              <label htmlFor="email">
                Email
                {!Isvalid && (
                  <p className="text-danger m-0">*please enter a valid email</p>
                )}
              </label>
              <input
                className="login-input"
                type="text"
                name="email"
                placeholder="Email"
                value={Newvalue.email}
                onChange={Inputhandler}
              ></input>
              <br></br>
              <br></br>
              <label htmlFor="password">
                Password{" "}
                {!passvalid && (
                  <p className="text-danger m-0">
                    *please enter correct password
                  </p>
                )}
              </label>
              <input
                type="text"
                className="login-input"
                name="password"
                placeholder="Password"
                value={Newvalue.password}
                onChange={Inputhandler}
              ></input>
            </div>
            <button className="authbtn" type="submit">
              {isloginmode ? "Login" : "SignUp"}
            </button>

            <p className="toggle mt-1">
              {isloginmode ? "Don't" : "Already"} have an account?
              <span
                className="switch"
                onClick={Changemode}
                style={{ cursor: "pointer" }}
              >
                &nbsp;
                {isloginmode ? "SignUp" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
