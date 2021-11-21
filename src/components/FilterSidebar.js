import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
const FilterSidebar = (props) => {
  const navigate = useNavigate();
  const myfunction1 = () => {
    navigate("#automobile");
  };
  return (
    <div
      className="position-fixed d-flex flex-column align-items-center px-2 py-5 w-25 bg-white shadow-lg h-100"
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
      <hr className="bg-dark border border-2 border-primary w-75" />
      <div className="w-100 px-3 mt-5">
        <p className="text-dark">TYPE</p>
        <div className="d-flex justify-content-between w-100 mb-2 align-items-center">
          <span>AutoMobiles</span>
          <div>
            <input
              type="checkbox"
              className="form-check-input ms-5 border-1 border-dark"
              id="automobile"
              onChange={myfunction1}
            />
            <label class="form-check-label" for="automobiles"></label>
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
            <label class="form-check-label" for="mobiles"></label>
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
            <label class="form-check-label" for="electronics"></label>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">
          Apply
        </button>
      </div>
    </div>
  );
};
export default FilterSidebar;
