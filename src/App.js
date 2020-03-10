import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss"; 
import Navbar from "./components/Navbar/Navbar";
import Tourlist from "./components/TourList";
import Home from './components/Home'
import HotelList from './components/HotelList';
import RestaurantList from './components/RestaurantList';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/hotellist" component={HotelList} />
            <Route path="/restaurantlist" component={RestaurantList} />
            <Route path="/tourlist" component={Tourlist} />
          </Switch>
          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}
   

   

export default App;
