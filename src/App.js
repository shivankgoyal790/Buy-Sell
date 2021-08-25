import './App.css';
import Mainnav from './shared/Components/Mainnav';
import Auth from "./shared/Auth/Auth"
import Allitems from './Items/Allitems';
import { BrowserRouter as Router, Route , Switch, Redirect } from "react-router-dom";
import Mainfooter from './shared/Components/Mainfooter';

const App = () =>{
  return(
    <Router>
     <Switch>
      <Route path="/Auth" exact><Auth/></Route> 
        <div>
       <Mainnav></Mainnav>
       <Route path="/" exact><Allitems/></Route>
       <Mainfooter />
      </div>
      <Redirect to="/" />
    </Switch>
    </Router>
  )
}
export default App;
