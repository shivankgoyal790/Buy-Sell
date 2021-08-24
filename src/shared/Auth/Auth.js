import React from "react"
import "./Auth.css"

const Auth = () =>{
    return(
        <div className="auth">
        <div className="auth-page">
            <div className="company-desc">
                <h1 className="logo">Buy&Sell</h1>
            </div>
            <div className="auth-container"> 
            <h1>AUTHENTICATE</h1>
            <div className="input-container">
                <label htmlFor="name">Name</label>
                <input className="login-input" type="text" name="name" placeholder="Enter your Name"></input>
                <br></br><br></br>
                <label htmlFor="email">Email</label>
                <input className="login-input" type="text" name="email" placeholder="Email"></input>
                <br></br><br></br>
                <label htmlFor="password">Password</label>
                <input type="text" className="login-input" name="password" placeholder="Password"></input>
               
             </div>   
             <button className="authbtn">Login</button>
            </div>
        </div>
       </div> 
    );
}

export default Auth