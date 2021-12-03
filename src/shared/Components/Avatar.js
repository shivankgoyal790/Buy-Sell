import React, { useContext } from "react";
import "./Avatar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/Authcontext";
const Avatar = () => {
  const Auth = useContext(AuthContext);
  return (
    <div className="avatar-container">
      <i>
        <Link
          to={`/${Auth.userId}/userdetails`}
          style={{ color: "black", textDecoration: "none" }}
        >
          <FontAwesomeIcon className="avatar-icon" icon={faUserCircle} />
        </Link>
      </i>
    </div>
  );
};

export default Avatar;
