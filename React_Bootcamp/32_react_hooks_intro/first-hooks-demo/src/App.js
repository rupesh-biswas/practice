import React, { Component } from "react";
import CounterClass from "./CounterClass";
import CounterHooks from "./CounterHooks";
import SimpleFormClass from "./SimpleFormClass";
import SimpleFormHooks from "./SimpleFormHooks";
import SimpleFormInputHook from "./SimpleFormInputHook";
import Toggler from "./Toggler";
import Clicker from "./Clicker";
import SWMovies from "./SWMovies";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterClass />
        <CounterHooks />
        <Toggler />
        <SimpleFormClass />
        <SimpleFormHooks />
        <SimpleFormInputHook />
        <Clicker />
        <SWMovies />
      </div>
    );
  }
}

export default App;
