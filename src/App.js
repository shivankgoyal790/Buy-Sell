import "./App.css";
import Mainnav from "./shared/Components/Mainnav";
import Auth from "./shared/Auth/Auth";
import Allitems from "./Items/Allitems";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainfooter from "./shared/Components/Mainfooter";
import Additem from "./Items/Additem";
import Updateitem from "./Items/Updateitem";
import Userdetails from "./Users/Userdetails";
import { useCallback, useState } from "react";
import { AuthContext } from "./shared/Authcontext";
import Homepage from "./Deals/homepage/Homepage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";

import Buy from "./pages/Buy/Buy";

import Feedback from "./pages/about/Feedback";
import Policy from "./pages/policy/Policy";
import Vchat from "./Video/Vchat";

const App = () => {
  const [isloggedin, setisloggedin] = useState(false);
  const [userId, setuserid] = useState(null);
  const login = useCallback((uid) => {
    setisloggedin(true);
    setuserid(uid);
  }, []);

  const logout = useCallback(() => {
    setisloggedin(false);
    setuserid(null);
  }, []);
  const [searchbarvalue, setsearchbarvalue] = useState([]);

  const setallitemsfiltervalue = (value) => {
    setsearchbarvalue(value);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isloggedin,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <Mainnav onsearchfilter={setallitemsfiltervalue} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <div>
                <Homepage />
                <Allitems mysearchvalue={searchbarvalue} />
              </div>
            }
          />
          <Route path="/Auth" exact element={<Auth />} />
          <Route
            path="/Sell"
            exact
            element={isloggedin ? <Additem /> : <Auth />}
          />
          <Route
            path=":itemid/updateitem"
            element={isloggedin ? <Updateitem /> : <Auth />}
          />
          <Route
            path=":userid/userdetails"
            element={isloggedin ? <Userdetails /> : <Auth />}
          />
          <Route path="/aboutUs" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path=":itemid/buyitem" element={<Buy />} />

          <Route path="/buydetails" element={<Buy />} />
          <Route path="/policy" element={<Policy />} />

          <Route path="/buydetails" element={<Buy />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/vchat" element={<Vchat />} />
        </Routes>
        <Mainfooter />
      </Router>
    </AuthContext.Provider>
  );
};
export default App;
