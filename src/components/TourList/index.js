import React, { useState, useEffect } from 'react';
import Tour from "../Tour";

import "./tourlist.scss";

export default function TourList () {


    const [ tours, setTours]  = useState([]);

    useEffect(() =>{     
            getTours();
    }, [])
    
    const getTours = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&limit=30&distance=5&lang=en_US&longitude=100.87808&latitude=12.91285`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('hotttels', json.data)
            setTours(json.data)
        })
        .catch(err => console.log(err))
    }

    // console.log('grhoels', tours)

    

const removeTour = id =>{
    // const{tours} = this.state;
    const sortedTours = tours.filter(tour => tour.id !== id);
    this.setState({
        tours: sortedTours
    })
};



        return (
            <section className="tourlist">
                {
                    tours.map(tour =>(<Tour key={tour.photo.id} name={tour.name} img={tour.photo.images.medium.url}
                    caption={tour.photo.caption} city={tour.location_string} info={tour.web_url} 
                    distance={tour.distance} address={tour.address_obj.street1}
                    removeTour={removeTour}></Tour>))
                }
            </section>
        )
    }

