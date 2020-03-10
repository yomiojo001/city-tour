import React, { Component } from 'react';

export default class Test extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <h1>Test location</h1>
            </div>
        )
    }
}
