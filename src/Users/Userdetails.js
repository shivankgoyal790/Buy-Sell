import React, { useState } from "react"
import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Userdetails.css"
import { useParams } from "react-router-dom"
const User = [{
    id : "u1",
    name : "shivank",
    email : "goyal.shivank790@gmail.com",
    mobile : "7906558590"

}];
const Userdetails = () =>{
  

    const userid = useParams().userid;
    const getuserbyid = User.filter(user => user.id === userid);
    const [details,setdetails] = useState({name:getuserbyid[0].name,email:getuserbyid[0].email,mobile:getuserbyid[0].mobile});
    const changedetailshandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setdetails((prev) =>{
            if(name === "name"){
                return{
                    name : value,
                    email : prev.email,
                    mobile : prev.mobile

            }}
            if(name === "email"){
                return{
                    name : prev.name,
                    email : value,
                    mobile : prev.mobile

            }}
            if(name === "mobile"){
                return{
                    name : prev.name,
                    email : prev.email,
                    mobile : value

            }}
    })};

    return( 
        <div className="userdetails">
        <h1>Your Account</h1> 
            <div className="user-container">
             
             <div>
                 <span><FontAwesomeIcon icon={faPen} /></span>
                 <input type="text" name="name" className="detail_box" value={details.name} onChange={changedetailshandler}></input>
             </div>
             <div>
                 <span><FontAwesomeIcon icon={faPen} /></span>
                 <input type ="text" className="detail_box" name="email" value={details.email} onChange={changedetailshandler}></input>
             </div>
             <div>
                 <span><FontAwesomeIcon icon={faPen} /></span>
                 <input type="text" className="detail_box" name="mobile" value={details.mobile} onChange={changedetailshandler}></input>
             </div>
             {/* <div>
                 <span className="detail-box"></span>
                 <span><FontAwesomeIcon icon={faPen} /></span>
             </div>
             <div>
                 <span className="detail-box"></span>
                 <span><FontAwesomeIcon icon={faPen} /></span>
             </div> */}
             <button type="submit" className="changebtn">Change</button> 
            </div>
        </div>
    );  
}

export default Userdetails