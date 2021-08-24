import './App.css';
import Mainnav from './shared/Components/Mainnav';
import Auth from "./shared/Auth/Auth"
import { BrowserRouter as Router, Route , Switch, Redirect } from "react-router-dom";

const App = () =>{
  return(
    <Router>
     <Switch>
      <Route path="/Auth" exact><Auth/></Route> 
        <div>
      <Route path="/" exact><Mainnav></Mainnav></Route>
      </div>
      <Redirect to="/" />
    </Switch>
    </Router>
  )
}
export default App;
