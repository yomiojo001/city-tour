import React, { Component } from 'react';
import Restaurant from "../Restaurant";

import "./restaurantlist.scss";

export default class RestaurantList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            restaurants: [],
            latitude: '',
            longitude: ''
        }
    }
    

    componentDidMount(){
        this.getMyLocation();
    }  
    componentDidUpdate(){
        this.getRestuarants();
    }
    
    getMyLocation = () => {
        const location = window.navigator && window.navigator.geolocation

        if(location) {
            location.getCurrentPosition((position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, (error) => {
                this.setState({ latitude: 'err-latitude', longitude: 'err-longitude '})
            })
        }
    }



     getRestuarants = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=${this.state.latitude}&longitude=${this.state.longitude}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('restauranttttts', json.data)
            this.setState({restaurants:json.data})
        })
        .catch(err => console.log(err))
    }


    
    removeRestaurant = id =>{
    // const{restaurant} = this.state;
    const sortedTours = this.state.restaurants.filter(restaurant => restaurant.id !== id);
    this.setState({
        restaurant: sortedTours
    })
};


    render(){
        return (
            <section className="restaurant-list">
                {
                    this.state.restaurants.map(restaurant =>(<Restaurant key={restaurant.location_id} name={restaurant.name} img={restaurant.photo.images.medium.url}
                    caption={restaurant.photo.caption} city={restaurant.location_string} info={restaurant.web_url} isOpen={restaurant.open_now_text}
                    distance={restaurant.distance_string} address={restaurant.address} restaurantClass={restaurant.rating} 
                    removeRestaurant={this.removeRestaurant}></Restaurant>))
                }
            </section>
        )
    }
}
