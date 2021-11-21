import React, { useEffect, useState } from "react";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Userdetails.css";
import { useParams } from "react-router-dom";
import Useritems from "../Items/Useritems";
// const User = [
//   {
//     id: "u1",
//     name: "shivank",
//     email: "goyal.shivank790@gmail.com",
//     mobile: "7906558590",
//   },
// ];
const Userdetails = () => {
  const userid = useParams().userid;
  //   const [loadeduser, setloadeduser] = useState();

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
      <div className="user-container">
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

        <button type="submit" className="changebtn">
          Change
        </button>
      </div>
      <Useritems userId={userid} />
    </div>
  );
};

export default Userdetails;
