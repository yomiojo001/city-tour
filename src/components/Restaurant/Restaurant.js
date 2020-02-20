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
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="restaurant">
                <div className="img-container">
                    <img src={img} alt="city restaurant" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="restaurant-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info{""}
                        <span onClick={this.handleInfo}>
                            <i className="fas fa-caret-square-down" />
                        </span>
                    </h5>
                    {this.state.showInfo && <p>{info}</p>}
                </div>
            </article>            
        )
    }
}
