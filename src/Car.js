import React, { useState } from "react"
import "./Car.css"
import Logo from "../src/images/bmw.jpg"
import Logo1 from "../src/images/avatar.png"

const Car = () =>{
    const [adjustmargin ,setmargin] = useState(0);  
    const slidelefthandler = () =>{
        if(adjustmargin > 400)
        {
            setmargin(prev => prev -  prev);
        }   
        else{
            setmargin(prev => prev + 100);
        }
    }

    setInterval(slidelefthandler,1000);
    return( 
        <div className="carousel">
            <div className="carouselbox" style={{marginRight : adjustmargin}}>
                <img src={Logo1} alt="bmw"></img>
                <img src={Logo} alt="bmw"></img>
                <img src={Logo} alt="bmw"></img>
                <img src={Logo} alt="bmw"></img>
                <img src={Logo} alt="bmw"></img>
                <img src={Logo} alt="bmw"></img>
            </div>
        </div>
    );
}

export default Car;