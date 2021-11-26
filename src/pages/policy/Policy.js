import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCopyright } from "@fortawesome/free-solid-svg-icons";
const Policy = () => {
  return (
    <div className=" text-center container policy mb-5 pb-5">
      <div className="p-5">
        <h2 className="display-2">Privacy Policy</h2>
        <hr
          style={{ width: "150px", opacity: "1" }}
          className="text-center mx-auto border border-3 border-primary"
        />
        <p className="mt-5">
          Buy-Sell is a College Project Made by Students: Shivank Goyal, Anurag
          Singh and Divyansh Bhargava of Jaypee Institute of Information
          Technology, Noida,sec-62.
        </p>{" "}
        <p>This Project has soul purpose of ProjectBased learning.</p>{" "}
        <p>
          If you choose to use our Service, then you agree to the collection and
          use of information in relation to this policy. The Personal
          Information that we collect is used for providing and improving the
          Service. We will not use or share your information with anyone except
          as described in this Privacy Policy.
        </p>{" "}
        <p>
          The Project is not meant to be used for Commercial Benefits and any
          illegal use of this project might result in legal actions.
        </p>
        <p>
          <b>
            <FontAwesomeIcon className="i1" icon={faCopyright} /> Anurag&nbsp;
            Shivank &nbsp; Divyansh
          </b>
        </p>
      </div>
    </div>
  );
};

export default Policy;
