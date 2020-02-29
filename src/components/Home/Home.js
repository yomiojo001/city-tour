import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

import bannerImg from '../../img/bann.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{backgroundImage: `url(${bannerImg})`}}>
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-2" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                </Jumbotron>

            </div>
        )
    }
}


