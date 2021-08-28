import React from "react"
import "./Avatar.css"
// import Logo from "../../images/avatar.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"

const Avatar = () =>{
    return(
        <div className="avatar-container">
        <i><Link to="/u1/userdetails"><FontAwesomeIcon className="avatar-icon" icon={faUserCircle}/></Link></i>
        </div>
    );
}

export default Avatar