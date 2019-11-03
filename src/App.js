import React, { Component } from 'react';
import "./App.scss"; 
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/TourList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
      </React.Fragment>
    )
  }
}
   

   

export default App;
