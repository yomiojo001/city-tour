import React, { Component } from 'react'
import "./restaurant.scss";

export default class Restaurant extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () =>{
        this.setState({
            showInfo: !this.state.showInfo
        });
    }


    render() {
        console.log(this.props)
        const {id, city, img, name, info, caption, distance, restaurantClass, isOpen} = this.props;
        // const distance = num.toFixed(2);
        const {removeRestaurant} = this.props;
        return (
            <article className="hotel">
                <div className="img-container">
                    <img src={img === undefined ? '' : img} alt={caption === undefined ? '' : caption} />
                    <span className="close-btn" onClick={() => removeRestaurant(id)}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="hotel-info">
                    <h3>{name}</h3>
                    <h4>{city}</h4>
                    <h4>{restaurantClass} <i className="fas fa-star" /></h4>
                    <h5>{distance} to your location</h5> 
                    <h5>Avalability{isOpen}</h5>
                    <h5>info{""}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <a href={info}>For more information click here</a>}
                </div>
            </article>            
        )
    }
}