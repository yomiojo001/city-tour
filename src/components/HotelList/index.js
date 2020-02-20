import React, { Component } from 'react';
import Hotel from "../Hotel";
import "./tourlist.scss";
import {tourData} from "../../tourData";

export default class HotelList extends Component {
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
            <section className="hotel-list">
                {
                    tours.map(tour =>(<Tour key={tour.id} tour={tour} 
                    removeTour={this.removeTour}></Tour>))
                }
            </section>
        )
    }
}
