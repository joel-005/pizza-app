import { Col, Container, Row,Image, Button } from "react-bootstrap";
import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


const PickoftheWeek = () => {
    const [show, setShow] = useState(false);
    return ( 
        <section id="musttry" className="my-3">
           <div className="text-center my-2 py-3">
             <h2 className="display-5 text-primary"><i class="bi bi-search-heart"></i> Pick Of The Week!</h2>
           </div>
           <Container>
            <Row className="align-items-center">
              <Col md={7}>
                <Image src= {require('../assets/center.jpg')} fluid={true} alt='pizza' rounded></Image>
              </Col>
              <Col md={5}>
                <div>
                    <h2 className="h1">Double Cheese Fajita</h2>
                    <p className="lead text-muted fst-italic">So creamy. So delicious. So full of softness in these offerings. #fajitas</p>
                    <Button variant="primary" onClick={() => setShow(true)}><i class="bi bi-basket"></i> Buy Now</Button>
                </div>
              </Col>
            </Row>
            <ToastContainer className="position-fixed bottom-0 end-0 p-3" position={'bottom-end'}>
          <Toast onClose={()=>setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added successfully!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item Added To Cart</Toast.Body>
          </Toast>
        </ToastContainer>
           </Container>
        </section>
     );
}
 
export default PickoftheWeek ;