import React from "react"
import "./Mainfooter.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Mainfooter = () =>{
    return(
        <div className="footer">
        <div>
            <ul className="footernavs">
                <li>About Us</li>
                <li>Policy</li>
                <li>Contact Us</li>
                <li>Help</li>
            </ul>
        </div>    
   
        <div> 
            <ul className="followlinks">
                <li><FontAwesomeIcon icon={faFacebook} /></li>
                <li><FontAwesomeIcon icon={faInstagram} /></li>
                <li><FontAwesomeIcon icon={faTwitter} /></li>
                <li><FontAwesomeIcon icon={faTelegram} /></li>
            </ul>
        </div>
        </div>
    );
}

export default Mainfooter