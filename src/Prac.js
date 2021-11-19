import React from "react"
import "./Prac.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons"
import { faCaretRight } from "@fortawesome/free-solid-svg-icons"
import Logo from "../src/images/bmw.jpg"
const Prac = () =>{

    const sliders = document.querySelector(".carouselbox");
let scrollPerClick;
let scrollAmount = 0;

const sliderScrollLeft = (event) => {
  event.preventDefault()
    sliders.scrollTo({      
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight(event) {
    event.preventDefault()
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
  console.log("Scroll Amount: ", scrollAmount);
}

// For showing dynamic contents only

    return(
      <div className="carousel">
      <div className="carouselbox">
          <img src={Logo} alt="gi"></img>
          <img src={Logo} alt="gi"></img>
          <img src={Logo} alt="gi"></img>
          <img src={Logo} alt="gi"></img>
          <img src={Logo} alt="gi"></img>
          <img src={Logo} alt="gi"></img>
        

      </div>
      

      <a className="switchLeft sliderButton" onclick={sliderScrollLeft} href="1">
          <FontAwesomeIcon icon = {faCaretLeft} />
      </a>
      <a className="switchRight sliderButton" onclick={sliderScrollRight} href="asfasf">
          <FontAwesomeIcon icon ={faCaretRight} />
      </a>
    </div>

    )
}

export default Prac;