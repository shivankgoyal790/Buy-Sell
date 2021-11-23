import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import "./Policy.css"
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Policy=()=> {
    return (
        <div className=" text-center policy" style={{height:"70vh"}}>
            <div className="p-5"><h2>Privacy Policy</h2> <p>
                    Buy-Sell is a College Project Made by Students: Shivank Goyal, Anurag Singh and Divyansh Bhargava of Jaypee Institute of Information Technology, Noida,sec-62.
                  </p> <p>
                    This Project has soul purpose of ProjectBased learning.
                  </p> <p>
                    If you choose to use our Service, then you agree
                    to the collection and use of information in relation to this
                    policy. The Personal Information that we collect is
                    used for providing and improving the Service.
                    We will not use or share your
                    information with anyone except as described in this Privacy
                    Policy.
                  </p> <p>
                    The Project is not meant to be used for Commercial Benefits and any illegal use of this project might result in legal actions.</p>
                    <p><b><FontAwesomeIcon className="i1" icon={faCopyright} /> AnuragShivankDivyansh</b></p></div>
        </div>
    )
}

export default Policy
