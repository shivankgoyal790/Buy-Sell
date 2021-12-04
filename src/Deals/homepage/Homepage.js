import { faShoppingCart, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import "./Homepage.css";

const Homepage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="back-card pt-4" id="backcard_dark">
      <h1 className="text-center">Top Deals</h1>
      <div className={`background__card`}>
        <div className="card" id="dealcard">
          <img
            className="mx-auto mt-4 shadow-lg"
            src="https://media.wired.com/photos/5d09594a62bcb0c9752779d9/master/pass/Transpo_G70_TA-518126.jpg"
            alt="avatar"
            height="300px"
            width="70%"
            style={{ objectFit: "cover" }}
          />

          <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-4">
            <div className="details">
              <h4>
                AUTOMOBILES
                <br />
              </h4>
            </div>
            <ul className="sci">
              <li
                onClick={() => {
                  navigate("/Sell");
                }}
              >
                <FontAwesomeIcon icon={faUpload} />
              </li>
              <li>
                <a href="#itemback" className="mylink">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card" id="dealcard1">
          <img
            className="mx-auto mt-4 shadow-lg"
            src="https://www.imagemobiles.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-30-at-9.37.51-AM.jpeg"
            alt="avatar"
            height="300px"
            width="70%"
            style={{ objectFit: "cover" }}
          />

          <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-4">
            <div className="details">
              <h4>
                MOBILES
                <br />
              </h4>
            </div>
            <ul className="sci">
              <li
                onClick={() => {
                  navigate("/Sell");
                }}
              >
                <FontAwesomeIcon icon={faUpload} />
              </li>
              <li>
                <a href="#itemback" className="mylink">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="card" id="dealcard2">
          <img
            className="mx-auto mt-4 shadow-lg"
            src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2018/10/sites-cheap-electronics.jpg"
            alt="avatar"
            height="300px"
            width="70%"
            style={{ objectFit: "cover" }}
          />

          <div className="d-flex flex-column justify-content-center align-items-center gap-1 mt-4">
            <div className="details">
              <h4>
                ELECTRONICS
                <br />
              </h4>
            </div>
            <ul className="sci">
              <li
                onClick={() => {
                  navigate("/Sell");
                }}
              >
                <FontAwesomeIcon icon={faUpload} />
              </li>
              <li>
                <a href="#itemback" className="mylink">
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
