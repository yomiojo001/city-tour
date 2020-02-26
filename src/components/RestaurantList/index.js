import React, { useState, useEffect } from 'react';
import Restaurant from "../Restaurant";

import "./restaurantlist.scss";

export default function RestaurantList () {


    const [ restaurants, setRestaurant]  = useState([]);

    useEffect(() =>{     
        getRestuarants();
    }, [])
    
    const getRestuarants = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=6.599199&longitude=3.348977`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('restauranttttts', json.data)
            setRestaurant(json.data)
        })
        .catch(err => console.log(err))
    }

    // console.log('grhoels', restaurant)

    

const removeRestaurant = id =>{
    // const{restaurant} = this.state;
    const sortedTours = restaurants.filter(restaurant => restaurant.id !== id);
    this.setState({
        restaurant: sortedTours
    })
};



        return (
            <section className="restaurant-list">
                {
                    restaurants.map(restaurant =>(<Restaurant key={restaurant.location_id} name={restaurant.name} img={restaurant.photo.images.medium.url}
                    caption={restaurant.photo.caption} city={restaurant.location_string} info={restaurant.web_url} isOpen={restaurant.open_now_text}
                    distance={restaurant.distance_string} address={restaurant.address} restaurantClass={restaurant.rating} 
                    removeRestaurant={removeRestaurant}></Restaurant>))
                }
            </section>
        )
    }

