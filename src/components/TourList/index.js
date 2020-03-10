import React, { Component } from 'react';
import Tour from "../Tour";

import "./tourlist.scss";

export default class TourList extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
            tours: [],
            latitude: '',
            longitude: ''
        }
    }
    

    componentDidMount(){
        this.getMyLocation()
    }   
    componentDidUpdate(){
        this.getTours();
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
    
    getTours = () => {
        fetch(`https://tripadvisor1.p.rapidapi.com/attractions/list-by-latlng?lunit=km&limit=30&distance=5&lang=en_US&longitude=${this.state.latitude}&latitude=${this.state.longitude}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                "x-rapidapi-key": "4875e72aefmsh036ade1b0294994p158f0cjsnf0f9902dad80"
            }
        })
        .then(res => res.json())
        .then(json => {
            console.log('hotttels', json.data)
            this.setState({tours:json.data})
        })
        .catch(err => console.log(err))
    }

    // console.log('grhoels', tours)

    

    removeTour = id =>{
    // const{tours} = this.state;
    const sortedTours = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
        tours: sortedTours
    })
};


    render(){
        return (
            <section className="tourlist">
                {
                    this.state.tours.map(tour =>(<Tour key={tour.photo.id} name={tour.name} img={tour.photo.images.medium.url}
                    caption={tour.photo.caption} city={tour.location_string} info={tour.web_url} 
                    distance={tour.distance} address={tour.address_obj.street1}
                    removeTour={this.removeTour}></Tour>))
                }
            </section>
        )
    }
}

