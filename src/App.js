import './App.css';
import Mainnav from './shared/Components/Mainnav';
import Auth from "./shared/Auth/Auth"
import Allitems from './Items/Allitems';
import { BrowserRouter as Router, Route , Switch, Redirect } from "react-router-dom";
import Mainfooter from './shared/Components/Mainfooter';
import Additem from './Items/Additem';
import Updateitem from './Items/Updateitem';
import Userdetails from './Users/Userdetails';
import { useCallback, useState } from 'react';
import { AuthContext } from './shared/Authcontext';

const App = () =>{

  const [isloggedin , setisloggedin] = useState(false);
  const login = useCallback(() => {
    setisloggedin(true);
  }, []);

  const logout = useCallback(() => {
    setisloggedin(false);
  }, []);
  return(
    <AuthContext.Provider
    value={{ isLoggedIn: isloggedin, login: login, logout: logout }}
  >
    <Router>
     <Switch>
      <Route path="/Auth" exact><Auth/></Route> 
        <div>
       <Mainnav></Mainnav>
       <Route path="/" exact><Allitems/></Route>
       <Route path="/Sell" exact><Additem/></Route>
       <Route path="/updateitem"><Updateitem></Updateitem></Route>
       <Route path="/:userid/userdetails"><Userdetails ></Userdetails></Route>
       <Mainfooter />
      </div>
      <Redirect to="/" />
    </Switch>
    </Router>
    </AuthContext.Provider>
  ) 
}
export default App;
