import React, {Component} from 'react';
import './App.scss';
import Header from "./components/header/header.js";
import Sections from "./components/sections/sections.js";

class App extends Component {
  render() {
    return (
        <div className="app-container">
         <Header />
         <Sections />
        </div>
    );
  }
}

export default App;
