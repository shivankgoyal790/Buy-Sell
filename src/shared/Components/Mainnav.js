import React from "react";
import "./Mainnav.css";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const Mainnav = (props) => {
  return (
    <div className="main-header" id="mainheader">
      <h1 className="logo">
        <Link to="/">Buy&Sell</Link>
      </h1>
      <Searchbar onsearchvalue={props.onsearchfilter}></Searchbar>
      <Navbar></Navbar>
    </div>
  );
};

export default Mainnav;
