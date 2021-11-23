import {
  faCommentDollar,
  faMapMarkerAlt,
  faPhoneAlt,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router";
import Payment from "../../shared/Payment/Payment";
import Spinner from "../../components/loadingspinner/Spinner";
import "./Buy.css";
import Chat from "../../shared/chat/Chat";
const Buy = (props) => {
  const itemid = useParams().itemid;
  const [isloading, setisloading] = useState(false);
  const [seller, setseller] = useState();
  const [isopenchat, setopenchat] = useState(false);
  const [getitem, setgetitem] = useState();
  useEffect(() => {
    const getitem = async () => {
      try {
        setisloading(true);
        const response = await fetch(
          `http://localhost:5000/api/${itemid}/item`
        );
        if (!response.ok) {
          setisloading(false);
          throw new Error("cannot buy this time");
        }
        const responsedata = await response.json();
        setisloading(false);
        setgetitem(responsedata.item);

        const sellername = await fetch(
          `http://localhost:5000/users/${responsedata.item.creator}`
        );
        if (!sellername.ok) {
          throw new Error("cannot get user");
        }
        const myseller = await sellername.json();
        setseller(myseller.user);
      } catch (err) {
        setisloading(false);
        console.log("try again");
      }
    };
    getitem();
  }, [itemid]);

  const closechat = () => {
    setopenchat(false);
  };
  const openchat = () => {
    setopenchat(true);
  };
  return (
    <>
      <Chat show={isopenchat} onclose={closechat} />
      <div className="col-xl-8 col-md-10 col-12 mx-auto mt-5 row shadow-lg p-0 py-5 ">
        {isloading && (
          <div className="d-flex justify-content-center align-items-center w-100">
            <Spinner />
          </div>
        )}
        {getitem && (
          <div className="row py-4 d-flex align-items-center justify-content-center gap-5 flex-lg-row flex-column p-0 mx-auto">
            <div className="col-lg-5 col-10">
              <Carousel interval={4000}>
                <Carousel.Item>
                  <img
                    className=""
                    src={`http://localhost:5000/${getitem.image}`}
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
                {getitem.name}
              </h1>
              <p className="m-0">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                &nbsp; {getitem.location}
              </p>

              <div className="mt-3 ps-3 leftborder">
                <FontAwesomeIcon
                  icon={faRupeeSign}
                  style={{ fontSize: "22px" }}
                />
                <span style={{ fontSize: "60px", fontWeight: "700" }}>
                  {getitem.sellprice}
                </span>
              </div>

              <p>{getitem.description}</p>
              <p>{getitem.age}</p>
              {seller && (
                <p>
                  Dealer : &nbsp;
                  <b style={{ fontSize: "22px" }}>{seller.name}</b>
                </p>
              )}
              {seller && (
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} />
                  &nbsp;
                  <b>{seller.mobile}</b>
                </p>
              )}

              <div className="d-flex gap-4">
                <div>
                  <Payment itemname={getitem.name} price={getitem.sellprice} />
                </div>
                <button
                  className="btn btn-success d-flex justify-content-center align-items-center"
                  onClick={openchat}
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
        )}
      </div>
    </>
  );
};

export default Buy;
