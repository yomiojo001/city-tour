import React, { Component } from 'react';
import Tour from "../Tour";
import "./tourlist.scss";
import {tourData} from "../../tourData";

export default class RestaurantList extends Component {
state = {
    tours: tourData
};



removeTour = id =>{
    const{tours} = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
        tours: sortedTours
    })
};

    render() {
        // console.log(this.state.tours);
        const {tours} = this.state;

        return (
            <section className="restaurant-list">
                {
                    tours.map(tour =>(<Tour key={tour.id} tour={tour} 
                    removeTour={this.removeTour}></Tour>))
                }
            </section>
        )
    }
}
