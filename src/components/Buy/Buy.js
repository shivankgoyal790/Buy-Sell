import React from "react";
import { Carousel } from "react-bootstrap";
import "./Buy.css";
const Buy = (props) => {
  return (
    <div className="buy-page">
        <div>
      <div className="row">
        <div className="col-md-5 p-5 carousel" >
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 product-img"
                src="https://static.india.com/wp-content/uploads/2021/06/taj-mahal-866692_1200.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-img"
                src="https://www.thoughtco.com/thmb/1g2-jnNGFo6SMikINMmHOmKsBMI=/3865x2576/filters:fill(auto,1)/sunrise-at-taj-mahal--agra--uttar-pradash--india-583682538-5b91840bc9e77c0050bdc67b.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product-img"
                src="https://images.theconversation.com/files/228846/original/file-20180723-189310-1ymcybu.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=754&fit=clip"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="col-md-7 p-3 carousel">
          <h1>Product Details</h1>
          <div className="price p-2">
            <p>
              Price : Rs <span className="figure">10000</span>
            </p>
            <p>
              Age : <span className="figure">Age from backend</span>
            </p>
            <p>
              Description :{" "}
              <span className="figure-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </span>
            </p>
            <p>
              Seller Name :{" "}
              <span className="figure">Seller name from backend</span>
            </p>
          </div>
          <div className="buy-button">
            <div className="btn btn-primary ">
              <h3>BUY ITEM</h3>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="btn btn-success position-absolute top-35 end-0 m-1">
        <p>CHAT WITH SELLER</p>
      </div>
    </div>
  );
};

export default Buy;
