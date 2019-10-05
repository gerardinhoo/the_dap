import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title="TEAM DAP" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}

export default App;
