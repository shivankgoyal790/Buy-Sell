import React, { useEffect, useState } from "react";
import Itemlist from "./Itemlist";

const Useritems = (props) => {
  const [useritems, setuseritems] = useState();
  useEffect(() => {
    const getuseritems = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/${props.userId}/useritems`
        );
        if (!response.ok) {
          throw new Error("cannot get details");
        }
        const responsedata = await response.json();

        setuseritems(responsedata.items);
      } catch (err) {
        console.log(err);
        console.log("try after some time");
      }
    };
    getuseritems();
  }, [props.userId, useritems]);
  return (
    <div className="w-100 d-flex flex-wrap justify-content-center align-items-center gap-4">
      {useritems && (
        <Itemlist items={useritems} heading="Your Items"></Itemlist>
      )}
    </div>
  );
};

export default Useritems;
