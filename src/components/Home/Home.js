import React, { Component } from 'react';
import { Jumbotron, Button, Card, CardImg, Row, Col, Container, CardTitle, CardText, CardLink } from 'reactstrap';

import hotelImg from '../../img/hotelImg.jpg';
import restaurantImg from '../../img/restt-img.jpg';
import tourImg from '../../img/tourmg.jpg';
import bannerImg from '../../img/bann.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.scss";



export default class Home extends Component {
    render() {
        return (
            <div style={{backgroundColor: "black"}}>
                <Jumbotron style={{backgroundImage: `url(${bannerImg})`}} className="text-center text-white">
                    <div className="py-3" style={{backgroundColor: " rgba(0, 0, 0, 0.5)"}}>
                        <h1 className="display-3" style={{fontStyle:"italic"}}>Explore your Amazing city</h1>
                        <h3 className="text-info ">Find great places to stay, eat, shop or visit around you</h3>
                        <h4 className="text-warning ">This is the best guide of your city</h4>
                    </div>
                </Jumbotron>
                <Container className="pb-4">
                    <Row className="text-center pb-4">
                        <Col sm="4" className="pb-4">
                            <Card body style={{backgroundColor: " rgba(34, 68, 66, 0.5)"}}>
                            <CardImg top width="100%" src={hotelImg} alt="Card image cap" />
                            <CardTitle className="mt-1" style={{fontSize:"1.2rem", fontWeight: "bold", color:"#82b240"}}>Hotels</CardTitle>
                            <CardText className="text-primary">Hotels around you haven't discovered yet...</CardText>
                            <CardLink href="/hotellist"><Button>View Hotel List</Button></CardLink>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body style={{backgroundColor: " rgba(34, 68, 66, 0.5)"}}>
                            <CardImg top width="100%" src={restaurantImg} alt="Card image cap" />
                            <CardTitle className="mt-1" style={{fontSize:"1.2rem", fontWeight: "bold", color:"#82b240"}}>Restaurants</CardTitle>
                            <CardText className="text-primary">Thinking of a new place to eat...</CardText>
                            <CardLink href="/restaurantlist"><Button>View Restaurant List</Button></CardLink>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body style={{backgroundColor: " rgba(34, 68, 66, 0.5)"}}>
                            <CardImg top width="100%" src={tourImg} alt="Card image cap" />
                            <CardTitle className="mt-1" style={{fontSize:"1.2rem", fontWeight: "bold", color:"#82b240"}}>Tours</CardTitle>
                            <CardText className="text-primary">Wonder where to visit this weekend...</CardText>
                            <CardLink href="/tourlist"><Button>View Tour List</Button></CardLink>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


