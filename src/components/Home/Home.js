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
            <div>
                <Jumbotron style={{backgroundImage: `url(${bannerImg})`, boxShadow: "0 5px 15px #222"}} className="text-center text-white">
                    <div className="py-3" style={{backgroundColor: " rgba(0, 0, 0, 0.5)", boxShadow: "0 5px 15px #222"}}>
                        <h1 className="display-3" style={{fontStyle:"italic", textShadow: "2px 2px 4px #fff"}}>Explore your Amazing city</h1>
                        <h3 className="text-info" style={{textShadow: "4px 4px 8px blue"}}>Find great places to stay, eat, relax or visit around you</h3>
                        <h4 className="text-warning" style={{textShadow: "4px 4px 8px orange"}}>This is the best guide of your city</h4>
                    </div>
                </Jumbotron>
                <Container className="pb-4">
                    <Row className="text-center pb-4">
                        <Col sm="4" className="pb-4">
                            <Card body >
                            <CardImg top width="100%" src={hotelImg} alt="Card image cap" />
                            <CardTitle className="mt-1" style={{fontSize:"1.2rem", fontWeight: "bold", color:"#82b240", textShadow: "2px 2px #FF0000"}}>Hotels</CardTitle>
                            <CardText className="text-primary" style={{textShadow: "2px 2px 8px #0000FF"}}><em>Hotels around you haven't discovered yet...</em></CardText>
                            <CardLink href="/hotellist" to="/hotellist"><Button>View Hotel List</Button></CardLink>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                            <CardImg top width="100%" src={restaurantImg} alt="Card image cap" />
                            <CardTitle className="mt-1" style={{fontSize:"1.2rem", fontWeight: "bold", color:"#82b240", textShadow: "2px 2px #FF0000"}}>Restaurants</CardTitle>
                            <CardText className="text-primary" style={{textShadow: "2px 2px 8px #0000FF"}}><em>Thinking of a new place to eat...</em></CardText>
                            <CardLink href="/restaurantlist" to="/hotellist"><Button>View Restaurant List</Button></CardLink>
                            </Card>
                        </Col>
                        <Col sm="4">
                            <Card body>
                            <CardImg top width="100%" src={tourImg} alt="Card image cap" />
                            <CardTitle className="mt-1" style={{fontSize:"1.2rem", fontWeight: "bold", color:"#82b240",  textShadow: "2px 2px #FF0000"}}>Tours</CardTitle>
                            <CardText className="text-primary" style={{textShadow: "2px 2px 8px #0000FF"}}><em>Wonder where to visit this weekend...</em></CardText>
                            <CardLink href="/tourlist" to="/hotellist"><Button>View Tour List</Button></CardLink>
                            </Card>
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}


