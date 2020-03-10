import React, { Component } from 'react';
import Hotel from "../Hotel";


import "./hotellist.scss";



export default class HotelList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            latitude: '',
            longitude: '',
            hotels: []
        }
    }
    


    componentDidMount(){
        this.getMyLocation();
        }

    componentDidUpdate(){
        this.getHotels()
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
    
    getHotels = () => {
        console.log('call');
        
        fetch(`https://tripadvisor1.p.rapidapi.com/hotels/list-by-latlng?lang=en_US&hotel_class=1%252C2%252C3&limit=30&adults=1&amenities=beach%252Cbar_lounge%252Cairport_transportation&rooms=1&child_rm_ages=7%252C10&subcategory=hotel%252Cbb%252Cspecialty&nights=2&latitude=${this.state.latitude}&longitude=${this.state.longitude}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('hotttels', json.data)
            this.setState({hotels: json.data})
        })
        .catch(err => console.log(err))
    }

    

    removeHotel = id =>{
    // const{hotels} = this.state;
    const sortedTours = this.state.hotels.filter(hotel => hotel.id !== id);
    this.setState({
        hotels: sortedTours
    })
    };


    render() {
    console.log(this.state)
        
        return (
            <section className="hotel-list">
                {
                    this.state.hotels.map(hotel =>(<Hotel key={hotel.location_id} name={hotel.name} img={hotel.photo.images.medium.url}
                    caption={hotel.photo.caption} city={hotel.location_string} info={hotel.business_listings.desktop_contacts[0]} 
                    distance={hotel.distance} hotelClass={hotel.hotel_class} price={hotel.price} 
                     removeHotel={this.removeHotel}></Hotel>))
                }

            </section>
        )
    }
}


