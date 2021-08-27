import React, { useState } from "react"
import "./Additem.css"

const Updateitem = () =>{

    const [Newvalue, setnewvlue] = useState({name:"", price:"",old:"",description:"",location:""});
    const changeinputhandler = (event) =>{
        const value = event.target.value;
        const name = event.target.name;
        if(name === "name"){
            setnewvlue((prev)=>{
                return(
                    {
                        name : value,
                        price:prev.price ,
                        old:prev.old,
                        description:prev.description,
                        location:prev.location

                    }
                )
            })
        }
        if(name === "price"){
            setnewvlue((prev)=>{
                return(
                    {
                        name : prev.name,
                        price:value ,
                        old:prev.old,
                        description:prev.description,
                        location:prev.location

                    }
                )
            })
        }

        if(name === "old"){
            setnewvlue((prev)=>{
                return(
                    {
                        name : prev.name,
                        price:prev.price ,
                        old:value,
                        description:prev.description,
                        location:prev.location

                    }
                )
            })
        }

        if(name === "description"){
            setnewvlue((prev)=>{
                return(
                    {
                        name : prev.name,
                        price:prev.price ,
                        old:prev.old,
                        description:value,
                        location:prev.location

                    }
                )
            })
        }

        if(name === "location"){
            setnewvlue((prev)=>{
                return(
                    {
                        name : prev.name,
                        price:prev.price ,
                        old:prev.old,
                        description:prev.description,
                        location:value

                    }
                )
            })
        }

    }
    return(
        <div className="sell-flex-container">
        <div className="sell-container">
            <h1 className="logo-container"><p className="sell-logo">Buy&Sell</p></h1>
            <div className="item-details">
            <input type="file"></input>
            <input type="text" value={Newvalue.name} onChange={changeinputhandler} name = "name" placeholder="Product Name" />    
            <input type="text" value={Newvalue.price} onChange={changeinputhandler} name="price" placeholder="Sell Price"></input> 
            <input type="text" value={Newvalue.old} onChange={changeinputhandler} name="old" placeholder="How Old is Your Product"></input>
            <input type="text" value={Newvalue.description} onChange={changeinputhandler} name="description" placeholder="Description"></input> 
            <input type="text" value={Newvalue.location} onChange={changeinputhandler} name="location" placeholder="location"></input>
            <button className="submit_sellbtn" type="submit">Edit</button> 
            </div>
            
        </div>
        </div>
    );  
}

export default Updateitem