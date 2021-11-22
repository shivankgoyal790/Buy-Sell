import {
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TeamMember = (props) => {
  return (
    <div className="card" style={{ height: "620px" }}>
      <img className="card-img" alt="user" src={props.src}></img>
      <div className="card-body">
        <h1>{props.name}</h1>
        <p>{props.enroll}</p>
        <p>Jaypee Institute Of Information Technology</p>
        <h5>{props.designation}</h5>
        <div className="d-flex gap-4" style={{ fontSize: "22px" }}>
          <FontAwesomeIcon icon={faGithub} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
