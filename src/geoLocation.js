import React, { Component } from 'react'

export default class GeoLocation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            latitude: '',
            longitude: ''
        }
    }

    componentDidMount(){
        this.getMyLocation()
    }

    getMyLocation() {
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

    
    render() {
        return (
            <div>
                <h1>{this.state.latitude}</h1>
                <h1>{this.state.longitude}</h1>
            </div>
        )
    }
}




// import React from 'react';
// import { usePosition } from 'use-position';

// export default function Position () {

//     const{ latitude, longitude, timestamp, accuracy, error } = usePosition(true);

//     // console.log('longitude', longitude)

//     return (
//         <div>
//             latitude: {latitude}
//             longitude: {longitude}
//             timestamp: {timestamp}
//             accuracy: {accuracy}
//             error: {error}
//         </div>
//     )
// }


