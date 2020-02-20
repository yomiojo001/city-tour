import React, { Component } from 'react';
import "./App.scss"; 
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/TourList";
import FetchTourData from "./fetchTourData";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Tourlist />
        <FetchTourData />
      </React.Fragment>
    )
  }
}
   

   

export default App;
