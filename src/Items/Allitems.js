import React, { useEffect, useState } from "react";
import Itemlist from "./Itemlist.js";
import Spinner from "../components/loadingspinner/Spinner";
const Allitems = () => {
  const [Items, setitems] = useState();
  const [isloading, setisloading] = useState(false);
  useEffect(() => {
    const sendrequest = async () => {
      setisloading(true);
      try {
        const response = await fetch("http://localhost:5000/api");
        const responsedata = await response.json();
        if (!response.ok) {
          throw new Error(responsedata.message);
        }
        setisloading(false);
        setitems(responsedata.items);
      } catch (err) {
        setisloading(false);
        console.log(err);
        console.log("cannot get items");
      }
    };

    sendrequest();
  }, []);

  const deleteitemhandler = (deleteid) => {
    setisloading(true);
    setitems((prevplaces) =>
      prevplaces.filter((place) => place.id !== deleteid)
    );
    setisloading(false);
  };
  return (
    <div className="position-relative w-100" id="itemback">
      {isloading && (
        <div className="w-100 text-center d-flex justify-content-center align-items-center mt-5 pt-5">
          <Spinner />
        </div>
      )}
      {Items && (
        <Itemlist
          items={Items}
          heading="Popular Items"
          filter="true"
          ondeleteitem={deleteitemhandler}
        />
      )}
    </div>
  );
};

export default Allitems;
