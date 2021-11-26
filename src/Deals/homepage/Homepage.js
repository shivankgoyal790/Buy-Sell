import {
  faFileUpload,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Homepage.css";

const Homepage = (props) => {
  return (
    <div className="back-card pt-4">
      <h1 className="text-center">Top Deals</h1>
      <div className={`background__card`}>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
              alt="avatar"
            />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                AUTOMOBILES
                <br />
              </h2>
            </div>
            <ul className="sci">
              <li>
                <a href="/Sell">
                  <FontAwesomeIcon icon={faFileUpload} />
                </a>
              </li>
              <li>
                <a href="asfasdf">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_new-iphone-se-white_04152020_big.jpg.large.jpg"
              alt="avatar"
            />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                MOBILES
                <br />
              </h2>
            </div>
            <ul className="sci">
              <li>
                <a href="/Sell">
                  <FontAwesomeIcon icon={faFileUpload} />
                </a>
              </li>
              <li>
                <a href="asdfasdf">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="imgBx">
            <img
              src="https://thumbs.dreamstime.com/b/many-used-modern-electronic-gadgets-use-white-floor-reuse-recycle-concept-top-view-153892483.jpg"
              alt="avatar"
            />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                ELECTRONICS
                <br />
              </h2>
            </div>
            <ul className="sci">
              <li>
                <a href="/Sell">
                  <FontAwesomeIcon icon={faFileUpload} />
                </a>
              </li>
              <li>
                <a href="asdfasdf">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
