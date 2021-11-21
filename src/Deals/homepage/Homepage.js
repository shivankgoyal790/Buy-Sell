import {
  faFacebook,
  faTelegram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Homepage.css";
function Homepage() {
  return (
    <div className="background__card" id="dealback">
      <div className="card">
        <div className="imgBx">
          <img
            src="https://ichef.bbci.co.uk/news/976/cpsprodpb/B9FF/production/_117751674_satan-shoes1.jpg"
            alt="avatar"
          />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              Nike Shoe
              <br />
            </h2>
          </div>
          <ul className="sci">
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img
            src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b89cb68c-2da6-4dac-9e64-b9c2ce7df166/wearallday-shoe-NpvSP5.png"
            alt="avatar"
          />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              Nike Shoe
              <br />
            </h2>
          </div>
          <ul className="sci">
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="imgBx">
          <img
            src="https://4.imimg.com/data4/IF/HG/ANDROID-56647035/product-500x500.jpeg"
            alt="avatar"
          />
        </div>
        <div className="content">
          <div className="details">
            <h2>
              Nike Shoe
              <br />
            </h2>
          </div>
          <ul className="sci">
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="as">
                <FontAwesomeIcon icon={faTelegram} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
