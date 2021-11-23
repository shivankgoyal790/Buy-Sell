import {
  faCommentDollar,
  faMapMarkerAlt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Buy.css";
const Buy = (props) => {
  return (
    <div className="col-xl-8 col-md-10 col-12 mx-auto mt-5 row shadow-lg p-0 py-5 ">
      <div className="row py-4 d-flex align-items-center justify-content-center gap-5 flex-lg-row flex-column p-0 mx-auto">
        <div className="col-lg-5 col-10">
          <Carousel interval={4000}>
            <Carousel.Item>
              <img
                className=""
                src="https://static.india.com/wp-content/uploads/2021/06/taj-mahal-866692_1200.jpg"
                alt="First slide"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=""
                src="https://www.thoughtco.com/thmb/1g2-jnNGFo6SMikINMmHOmKsBMI=/3865x2576/filters:fill(auto,1)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg"
                alt="Second slide"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=""
                src="https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
                alt="Third slide"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-lg-6 p-3 col-md-10 col-12">
          <h1 className="display-4  myfont" style={{ fontWeight: "700" }}>
            Lambhorgini
          </h1>
          <p className="m-0">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &nbsp; Banglore
          </p>

          <div className="mt-3 ps-3 leftborder">
            <FontAwesomeIcon icon={faRupeeSign} style={{ fontSize: "22px" }} />
            <span style={{ fontSize: "60px", fontWeight: "700" }}>10000</span>
          </div>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>Age from backend</p>
          <p>
            Dealer : &emsp;<b>Seller name from backend</b>
          </p>

          <div className="d-flex gap-4">
            <button className="btn btn-primary" style={{ fontSize: "20px" }}>
              Buy Item
            </button>
            <button
              className="btn btn-success d-flex justify-content-center align-items-center"
              style={{
                fontSize: "20px",
              }}
            >
              <FontAwesomeIcon icon={faCommentDollar} />
              &nbsp;
              <p className="m-0">chat</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
