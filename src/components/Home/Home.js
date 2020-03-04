import React, { Component } from 'react';
import { Jumbotron, Button, Card, CardImg, Row, Col, Container, CardTitle, CardText, NavLink } from 'reactstrap';

import hotelImg from '../../img/hotelImg.jpg';
import restaurantImg from '../../img/restaurant_img.jpg';
import tourImg from '../../img/tour-img.jpg';
import bannerImg from '../../img/bann.jpg';
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
                <Container>
                    <Row>
                        <Col sm="4">
                            <Card body>
                            <CardImg top width="100%" src={hotelImg} alt="Card image cap" />
                            <CardTitle></CardTitle>
                            <CardText></CardText>
                            <Button><NavLink to="/hotelist">View Hotel List</NavLink></Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                            <CardImg top width="100%" src={restaurantImg} alt="Card image cap" />
                            <CardTitle></CardTitle>
                            <CardText></CardText>
                            <Button>View Restaurant List</Button>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                            <CardImg top width="100%" src={tourImg} alt="Card image cap" />
                            <CardTitle></CardTitle>
                            <CardText></CardText>
                            <Button>View Tour List</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


