import React, { Component } from 'react';
import Location from './geoLocation';


export default class fetchTourData extends Component {


    getTours = () =>{
        fetch(`https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&limit=30&distance=5&lang=en_US&longitude=100.87808&latitude=12.91285`, {
            method: 'GET',
            'headers': {
                "x-rapidapi-host" : 'tripadvisor1.p.rapidapi.com',
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(response => response.json() )
        .then(json => console.log('tours', json)
        )
        .catch(err =>{
            console.log(err);
        })
    };

    getHotels = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?lang=en_US&hotel_class=1%252C2%252C3&limit=30&adults=1&amenities=beach%252Cbar_lounge%252Cairport_transportation&rooms=1&child_rm_ages=7%252C10&currency=USD&subcategory=hotel%252Cbb%252Cspecialty&nights=2&latitude=12.91285&longitude=100.87808`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => console.log('hotels', json))
        .catch(err => console.log(err))
    }


    getRestuarants = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=6.599199&longitude=3.348977`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => console.log('restuarants', json))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getTours();
        this.getHotels();
        this.getRestuarants();
    }

    render(props) {
        
        return (
            <div>
                <Location />
            </div>
        )
    }
}
