import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
const FilterSidebar = (props) => {
  const navigate = useNavigate();
  const myfunction1 = () => {
    navigate("#automobile");
  };
  const locationfilterhandler = (event) => {
    event.preventDefault();
    if (document.getElementById("agra").checked) props.onSubmitlocation("agra");
    if (document.getElementById("delhi").checked)
      props.onSubmitlocation("delhi");
    if (document.getElementById("banglore").checked)
      props.onSubmitlocation("banglore");
  };

  const typefilterhandler = (event) => {
    event.preventDefault();
    if (document.getElementById("automobiles").checked)
      props.onSubmittype("Automobiles");
    if (document.getElementById("mobiles").checked)
      props.onSubmittype("Mobiles");
    if (document.getElementById("electronics").checked)
      props.onSubmittype("Electronics");
  };
  return (
    <div
      className="position-fixed mt-5 d-flex flex-column align-items-center px-2 py-5 col-lg-3 col-md-5 col-sm-8 col-12 bg-white shadow-lg h-100"
      style={{
        top: "0",
        left: "0",
        display: props.show ? "flex" : "none",
        zIndex: "99",
      }}
    >
      <div
        className="position-absolute top-0 p-4"
        style={{ right: "0px" }}
        onClick={props.onClick}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <h1>Filter</h1>
      <hr
        className="bg-dark border border-2 border-primary w-75"
        style={{ opacity: "1" }}
      />
      <form className="w-100 px-3 mt-5" onSubmit={typefilterhandler}>
        <p className="text-primary">TYPE</p>
        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>AutoMobiles</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="automobiles"
              onChange={myfunction1}
            />
            <label className="form-check-label" htmlFor="automobiles"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>Mobiles</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="mobiles"
            />
            <label className="form-check-label" htmlFor="mobiles"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>Electronics</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="electronics"
            />
            <label className="form-check-label" htmlFor="electronics"></label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Apply
        </button>
      </form>
      <form className="w-100 px-3 mt-5" onSubmit={locationfilterhandler}>
        <p className="text-primary">LOCATION</p>
        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>Agra</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="agra"
              onChange={myfunction1}
            />
            <label className="form-check-label" htmlFor="automobiles"></label>
          </div>
        </div>
        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>Delhi</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="delhi"
            />
            <label className="form-check-label" htmlFor="mobiles"></label>
          </div>
        </div>

        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>Banglore</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="banglore"
            />
            <label className="form-check-label" htmlFor="electronics"></label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Apply
        </button>
      </form>
    </div>
  );
};
export default FilterSidebar;
