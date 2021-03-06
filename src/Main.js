import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Tap from "./Tap";
import Events from "./Events";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
<div>
          <h1>TART: Charlotte's Finest Cider</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/tap">Tap</NavLink></li>
            <li><NavLink to="/events">Events</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/tap" component={Tap}/>
          <Route path="/events" component={Events}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;