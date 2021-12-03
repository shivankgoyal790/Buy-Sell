import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TeamMember = (props) => {
  return (
    <div className="card" style={{ height: "620px" }}>
      <img className="card-img" alt="user" src={props.src} height="398px" />
      <div className="card-body">
        <h1>{props.name}</h1>
        <p>{props.enroll}</p>
        <p>Jaypee Institute Of Information Technology</p>
        <h5>{props.designation}</h5>
        <div className="d-flex gap-4" style={{ fontSize: "22px" }}>
          <a href="https://www.jiit.ac.in" style={{ color: "black" }}>
            <FontAwesomeIcon icon={faBuilding} />
          </a>
          <a href={props.github} style={{ color: "black" }}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href={props.linkedin} style={{ color: "black" }}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href={props.protfolio} style={{ color: "black" }}>
            <FontAwesomeIcon icon={faBriefcase} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
