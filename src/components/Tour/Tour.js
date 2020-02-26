import React, { Component } from 'react'
import "./tour.scss";

export default class Hotel extends Component {
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
        const {id, city, img, name, info, caption, distance, address, price} = this.props;
        // const distance = num.toFixed(2);
        const {removeHotel} = this.props;
        return (
            <article className="tour">
                <div className="img-container">
                    <img src={img} alt={caption} />
                    <span className="close-btn" onClick={() => removeHotel(id)}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{name}</h3>
                    <h4>{address}</h4>
                    <h4>{city}</h4>
                    <h5>{price}</h5>
                    <h5>{distance}Km to your location</h5>
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
