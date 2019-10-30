import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Saved from "./pages/saved";
import Header from "./components/Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
