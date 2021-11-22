import React from "react";
import "./Mainfooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Mainfooter = () => {
  return (
    <div className="footer mt-5 pt-5 w-100 overflow-hidden" id="mainfooter">
      <div>
        <ul className="footernavs">
          <li><a href="/AboutUs">About Us</a></li>
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
