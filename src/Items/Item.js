import React, { useContext } from "react";
import "./Item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/Authcontext";
const Item = (props) => {
  const Auth = useContext(AuthContext);
  const deleteitemhandler = async () => {
    try {
      await fetch(`http://localhost:5000/api/${props.id}/delete`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      props.ondelete(props.id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="card" style={{ height: "550px" }}>
      <img
        className="card-img"
        src={`http://localhost:5000/${props.image}`}
        alt="productimg"
        height="300px"
      ></img>
      <div className="card-body">
        <h2 className="product-name mt-2 mb-4 text-center">{props.name}</h2>
        <div className="details">
          <h1 className="price">
            <FontAwesomeIcon icon={faRupeeSign} style={{ fontSize: "20px" }} />
            &nbsp;{props.price}
          </h1>
          <p className="text-secondary pt-2">{props.age}</p>
          <p className="text-secondary py-1">{props.details}</p>
          <p className="location">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            &nbsp;{props.location}
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="buybtn">
            <FontAwesomeIcon icon={faShoppingBag} />
            &nbsp;Buy
          </button>

          {Auth.userId === props.creator && (
            <div>
              <button className="buybtn2">
                <Link to={`${props.id}/updateitem`} style={{ color: "black" }}>
                  <FontAwesomeIcon icon={faPen} />
                </Link>
              </button>
              <button className="buybtn2" onClick={deleteitemhandler}>
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
