import React, { useContext, useEffect, useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Userdetails.css";
import { useParams } from "react-router-dom";
import Useritems from "../Items/Useritems";
import { AuthContext } from "../shared/Authcontext";
const Userdetails = () => {
  const userid = useParams().userid;
  const auth = useContext(AuthContext);
  const [details, setdetails] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  console.log(userid);
  useEffect(() => {
    const getuserdetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/users/${userid}`);
        if (!response.ok) {
          throw new Error("cannot get details");
        }
        const responsedata = await response.json();
        setdetails(responsedata.user);
      } catch (err) {
        console.log(err);
        console.log("tryagain");
      }
    };

    getuserdetails();
  }, [userid]);

  const updateuserdetails = async () => {
    try {
      await fetch(`http://localhost:5000/users/${auth.userId}/updateuser`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: details.name,
          email: details.email,
          mobile: details.mobile,
        }),
      });
      console.log("user profile updated");
    } catch (err) {
      console.log("cannot update details try again");
    }
  };
  const changedetailshandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdetails((prev) => {
      if (name === "name") {
        return {
          name: value,
          email: prev.email,
          mobile: prev.mobile,
        };
      }
      if (name === "email") {
        return {
          name: prev.name,
          email: value,
          mobile: prev.mobile,
        };
      }
      if (name === "mobile") {
        return {
          name: prev.name,
          email: prev.email,
          mobile: value,
        };
      }
    });
  };

  return (
    <div className="userdetails mt-5">
      <h1 className="mb-3">Your Account</h1>
      <div className="user-container col-lg-5 col-md-9 col-11 mx-auto">
        <div>
          <span>
            <FontAwesomeIcon icon={faPen} />
          </span>
          <input
            type="text"
            name="name"
            className="detail_box"
            value={details.name}
            onChange={changedetailshandler}
          ></input>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faPen} />
          </span>
          <input
            type="text"
            className="detail_box"
            name="email"
            value={details.email}
            onChange={changedetailshandler}
          ></input>
        </div>
        <div>
          <span>
            <FontAwesomeIcon icon={faPen} />
          </span>
          <input
            type="text"
            className="detail_box"
            name="mobile"
            value={details.mobile}
            onChange={changedetailshandler}
          ></input>
        </div>

        <button type="submit" className="changebtn" onClick={updateuserdetails}>
          Change
        </button>
      </div>
      <Useritems userId={userid} />
    </div>
  );
};

export default Userdetails;
