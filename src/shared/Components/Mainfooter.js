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
import { Link } from "react-router-dom";

const Mainfooter = () => {
  return (
    <div className="footer mt-5 pt-5 w-100 overflow-hidden" id="mainfooter">
      <div className="text-center">
        <ul className="footernavs list-unstyled">
          <li>
            <a href="/aboutUs">About Us</a>
          </li>
          <li>
            <Link to="/policy">Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
      </div>

      <div>
        <ul className="followlinks list-unstyled">
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
