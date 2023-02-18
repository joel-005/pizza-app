import React from "react";
import { Container, Form, Row, Col, InputGroup, FloatingLabel } from "react-bootstrap";
const Comments = () => {
  return (
    <section id="contact" className="bg-light py-3">
      <div className="text-center my-2 py-3">
        <h2 className="text-primary">Comments <i class="bi bi-chat-left-heart"></i></h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-open-heart"></i></InputGroup.Text>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                >
                  <Form.Control type="text" placeholder="Enter name" />
                </FloatingLabel>
              </InputGroup>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Comments;