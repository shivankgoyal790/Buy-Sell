import React from "react";
import "./Mainfooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Mainfooter = () => {
  return (
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
          <li>
            <FontAwesomeIcon className="i1" icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon className="i2" icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon className="i3" icon={faTwitter} />
          </li>
          <li>
            <FontAwesomeIcon className="i4" icon={faTelegram} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Mainfooter;
