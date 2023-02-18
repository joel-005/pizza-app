import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
return ( 
    <Container fluid>
        <Row className="justify-content-center align-items-center">
            <Col lg={8}>
            <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/pizza-1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Double Cheese Margherita</h3>
          <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/pizza-2.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Classic Veg Pizza</h3>
          <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require('../assets/pizza-3.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Italian Cheese Pizza</h3>
          <p className="d-none d-sm-block">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className="text-center mt-3">
        <h2 className="display-5">Pizzas For Every Occasion</h2>
        <p className="lead text-muted"> Do good. Be nice. Order pizza</p>
        </div>
    </Container>
 );
}
 
export default Banner;