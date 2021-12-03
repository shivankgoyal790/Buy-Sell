import React, { useEffect, useState } from "react";
import Itemlist from "./Itemlist.js";
import Spinner from "../components/loadingspinner/Spinner";

const Allitems = (props) => {
  const [Items, setitems] = useState();
  const [maintaineditems, setmaintaineditems] = useState();
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
        setmaintaineditems(responsedata.items);
        let value;
        if (props.mysearchvalue)
          value = props.mysearchvalue.toString().toUpperCase();
        if (value.length > 0) {
          setitems((previtems) =>
            previtems.filter(
              (item) => item.name.toUpperCase().indexOf(value) > -1
            )
          );
        }
      } catch (err) {
        setisloading(false);
        console.log(err);
        console.log("cannot get items");
      }
    };

    sendrequest();
  }, [props.mysearchvalue]);

  const deleteitemhandler = (deleteid) => {
    setisloading(true);
    setitems((previtem) => previtem.filter((item) => item.id !== deleteid));
    setisloading(false);
  };

  const locationfilterhandler = (loc) => {
    setitems(maintaineditems);
    setitems((previtems) => previtems.filter((item) => item.location === loc));
  };
  const typefilterhandler = (giventype) => {
    console.log(giventype);
    setitems(maintaineditems);
    setitems((previtems) =>
      previtems.filter((item) => item.type === giventype)
    );
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
          onfilterlocation={locationfilterhandler}
          onfiltertype={typefilterhandler}
        />
      )}
    </div>
  );
};

export default Allitems;
