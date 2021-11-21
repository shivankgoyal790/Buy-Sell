import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import { AuthContext } from "../Authcontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isdarkmode, setisdarkmode] = useState(false);
  const changemode = () => {
    if (!isdarkmode) {
      document.getElementById("mainheader").classList.remove("lightmode");
      document.getElementById("mainheader").classList.add("darkmode");
      document.getElementById("carditem").style.backgroundColor = "black";
      document.getElementById("carditem").style.color = "white";
      document.getElementById("mainfooter").style.backgroundColor = "black";

      setisdarkmode(true);
    } else {
      document.getElementById("mainheader").classList.remove("darkmode");
      document.getElementById("mainheader").classList.add("lightmode");
      document.getElementById("itemback").style.backgroundColor = "white";

      document.getElementById("mainfooter").style.backgroundColor = "#eeebeb";
      setisdarkmode(false);
    }
  };
  const auth = useContext(AuthContext);
  return (
    <ul className="navlinks mt-3">
      <li>
        <Avatar />
      </li>
      {!auth.isLoggedIn && (
        <li>
          <Link to="/Auth" style={{ color: "black", textDecoration: "none" }}>
            <u className={`${isdarkmode ? "text-light" : "text-black"}`}>
              Login
            </u>
          </Link>
        </li>
      )}
      {auth.isLoggedIn && (
        <li onClick={auth.logout}>
          <u className={`${isdarkmode ? "text-light" : "text-black"}`}>
            Logout
          </u>
        </li>
      )}
      <li>
        <button className="sellbtn">
          <Link className="nav-anchor" to="/Sell">
            SELL +
          </Link>
        </button>
      </li>
      <li>
        <FontAwesomeIcon
          onClick={changemode}
          icon={faAdjust}
          style={{ fontSize: "30px", cursor: "pointer" }}
        />
      </li>
    </ul>
  );
};

export default Navbar;
