import React, { useState } from "react"
import "./Auth.css"

const Auth = () =>{

    const[isloginmode, setisLoginmode] = useState(true);
    const[Newvalue,setnewvalue] = useState({name:"",email:"",password:""}) ;
    const Inputhandler = (event) =>{
        const field = event.target.name;
        const value = event.target.value;
        if(field === "name"){
            setnewvalue((prev) => {
                return{
                name :value,
                email :prev.email,
                password : prev.password}
            })
        }
        if(field === "email"){
            setnewvalue((prev) => {
                return{
                name :prev.name,
                email :value,
                password : prev.password}
            })
        }
        if(field === "password"){
            setnewvalue((prev) => {
                return{
                name :prev.name,
                email :prev.email,
                password : value}
            })
        }

    }

    const Changemode = () =>{
        if(isloginmode)
        setisLoginmode(false)
        else
        setisLoginmode(true)
    }
    return(
        <div className="auth">
        <div className="auth-page">
            <div className="company-desc">
                <h1 className="logo">Buy&Sell</h1>
            </div>
            <div className="auth-container"> 
            <h1>AUTHENTICATE</h1>
            <div className="input-container">
                
                <label htmlFor="name" style ={{display:isloginmode ? "none" : "block"}}>Name</label>
                <input 
                    className="login-input" 
                    type="text"
                    style ={{display:isloginmode ? "none" : "block"}} 
                    name="name" 
                    placeholder="Enter your Name" 
                    value={Newvalue.name} 
                    onChange={Inputhandler}>
                </input>
                
                <br></br>

                <label htmlFor="email">Email</label>
                <input 
                    className="login-input" 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    value={Newvalue.email} 
                    onChange ={Inputhandler}>
                </input>
                <br></br><br></br>
                <label htmlFor="password">Password</label>
                <input 
                    type="text" 
                    className="login-input" 
                    name="password" 
                    placeholder="Password" 
                    value={Newvalue.password} 
                    onChange={Inputhandler}>
                </input>
               
             </div>   
             <button className="authbtn">{isloginmode ? "Login" :"SignUp"} </button>
             <p className="toggle"> {isloginmode ? "Don't" : "Already"} have an account?
             <span className="switch" onClick={Changemode}> {isloginmode ? "SignUp" : "Login"} </span></p>
            </div>
        </div>
       </div> 
    );
}

export default Auth