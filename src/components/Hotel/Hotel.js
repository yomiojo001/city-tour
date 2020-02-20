import React, { Component } from 'react'
import "./hotel.scss";

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
        const {id, city, img, name, info} = this.props.tour;
        const {removeTour} = this.props;
        return (
            <article className="hotel">
                <div className="img-container">
                    <img src={img} alt="city hotel" />
                    <span className="close-btn" onClick={() => removeTour(id)}>
                        <i className="fas fa-window-close"/>
                    </span>
                </div>
                <div className="hotel-info">
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
