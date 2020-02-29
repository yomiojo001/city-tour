import React, { useState, useEffect } from 'react';
import Hotel from "../Hotel";
import Location from '../../geoLocation';

import "./hotellist.scss";





export default function HotelList () {

    const [ hotels, setHotels]  = useState([]);
    const [ geolocation, setGeolocation]  = useState([]);

    useEffect(() =>{     
            getHotels();
            
            getGeoLocation();
    }, [])
    function getGeoLocation(){
        setGeolocation(<Location />)
        
    }
    
    
    const getHotels = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?lang=en_US&hotel_class=1%252C2%252C3&limit=30&adults=1&amenities=beach%252Cbar_lounge%252Cairport_transportation&rooms=1&child_rm_ages=7%252C10&currency=USD&subcategory=hotel%252Cbb%252Cspecialty&nights=2&latitude=12.91285&longitude=100.87808`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('hotttels', json.data)
            setHotels(json.data)
        })
        .catch(err => console.log(err))
    }

    console.log('grhoels', geolocation)

    

const removeHotel = id =>{
    // const{hotels} = this.state;
    const sortedTours = hotels.filter(hotel => hotel.id !== id);
    this.setState({
        hotels: sortedTours
    })
};



        return (
            <section className="hotel-list">
                {
                    hotels.map(hotel =>(<Hotel key={hotel.location_id} name={hotel.name} img={hotel.photo.images.medium.url}
                    caption={hotel.photo.caption} city={hotel.location_string} info={hotel.business_listings.desktop_contacts[0]} 
                    distance={hotel.distance} hotelClass={hotel.hotel_class} price={hotel.price} 
                     removeHotel={removeHotel}></Hotel>))
                }
                <button onClick={() => getGeoLocation()}>Click me to share my location</button>
                {geolocation.longitude}
                

            </section>
        )
    }

