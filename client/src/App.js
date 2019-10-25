import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import Header from "./components/Header/Header.js";
import Banner from "./components/Banner/Banner.js"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Banner />
      </Router>
    );
  }
}

export default App;
