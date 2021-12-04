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
    let var1 = document.getElementById("mainheader");
    let var2 = document.getElementById("itemcardback");
    let var3 = document.getElementById("mainfooter");
    let var4 =document.getElementById("dealcard");
    let var5 =document.getElementById("dealcard1");
    let var6 =document.getElementById("dealcard2");

    if (!isdarkmode) {
      if (var1) {
        var1.classList.remove("lightmode");
        var1.classList.add("darkmode");
      }
      if (var2) {
        var2.style.backgroundColor = "black";
        var2.style.color = "white";
        var4.style.backgroundColor="black";
        var4.style.color = "white";
        var5.style.backgroundColor="black";
        var5.style.color = "white";
        var6.style.backgroundColor="black";
        var6.style.color = "white";
      }
      var3.style.backgroundColor = "black";

      setisdarkmode(true);
    } else {
      if (var1) {
        var1.classList.remove("darkmode");
        var1.classList.add("lightmode");
      }
      if (var2) {
        var2.style.backgroundColor = "white";
        var2.style.color = "black";
        var4.style.backgroundColor="white";
        var4.style.color = "black";
        var5.style.backgroundColor="white";
        var5.style.color = "black";
        var6.style.backgroundColor="white";
        var6.style.color = "black";
      }

      if (var3) {
        var3.style.backgroundColor = "#eeebeb";
      }

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
