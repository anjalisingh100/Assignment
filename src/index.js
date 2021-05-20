import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import State from "./components/StatePage/State";
import District from "./components/District/district";

ReactDOM.render(
  
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/state/:state/district/:district">
        <District/>
      </Route>
      <Route path="/state/:state">
        <State/>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
reportWebVitals();