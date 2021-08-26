import React from "react"
import "./Avatar.css"
// import Logo from "../../images/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

const Avatar = () =>{
    return(
        <div className="avatar-container">
        <i><FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/></i>
        </div>
    );
}

export default Avatar