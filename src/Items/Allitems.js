import React from "react"
import Itemlist from "./Itemlist.js";

const Allitems = () =>{
    const Items = [
        {
            id :'p1',
            name : 'BMW',
            price : 760000,
            details : 'BMW 5series 24000km',
            age :'2017 model',
            location: 'Agra'
    
        },
        {
            id :'p2',
            name : 'audi',
            price : 660000,
            details : 'Audi A4 30000km',
            age : '2016 model',
            location: 'Agra'
        }
    ];
    return <Itemlist items={Items} />
}

export default Allitems