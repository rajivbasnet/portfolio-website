import axios from "axios";
import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardDeck,
  Button,
  Form,
  Modal,
} from "react-bootstrap";
import BottomDetails from "./bottomdetails";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      showmodal: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  showModal = () => {
    this.setState({ showmodal: true });
  };

  hideModal = () => {
    this.setState({ showmodal: false });
  };

  handleReset = (e) => {
    this.setState({ name: "", email: "", subject: "", message: "" });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  isNullOrEmpty(str) {
    return !str || !str.trim();
  }

  handleSubmit(e) {
    let { name, email, subject, message } = this.state;
    e.preventDefault();
    if (
      this.isNullOrEmpty(name) ||
      this.isNullOrEmpty(email) ||
      this.isNullOrEmpty(subject) ||
      this.isNullOrEmpty(message)
    ) {
      alert("Please make sure that all the fields are correctly filled in.");
    } else {
      try {
        axios.post("/api/contactform", {
          name,
          email,
          subject,
          message,
        });

        this.setState({
          showmodal: true,
        });
        this.handleReset();
      } catch (error) {
        alert(
          "Ops something went wrong. Please try again or send me a direct email."
        );
      }
    }
  }

  render() {
    const handleClose = () => this.setState({ showmodal: false });
    return (
      <React.Fragment>
        <Container id="contact">
          <Row>
            <Col>
              <p
                className="h5 lead font-weight-bold text-center"
                style={{ color: "#000000" }}
              >
                {" "}
                CONTACT ME{" "}
              </p>{" "}
            </Col>
          </Row>
          <hr className="my-4" />
          <Row className="justify-content-center">
            {" "}
            <CardDeck>
              <Card
                style={{ backgroundColor: "#f8f9fa", marginBottom: "20px" }}
              >
                <Card.Body>
                  {/* Handling confirmation of message */}
                  <Modal
                    show={this.state.showmodal}
                    handleClose={this.hideModal}
                  >
                    <Modal.Header>
                      <Modal.Title>Message Sent!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Thank you for your message. I will try getting back to you
                      ASAP.
                    </Modal.Body>
                    <Button variant="secondary mt-4" onClick={handleClose}>
                      Close
                    </Button>
                  </Modal>
                  {/*
                   */}

                  <Form onSubmit={this.handleSubmit} name="form">
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Your Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Your Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={this.state.email}
                        placeholder="name@example.com"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={this.state.subject}
                        placeholder="Subject"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control
                        type="textarea"
                        as="textarea"
                        name="message"
                        value={this.state.message}
                        rows="3"
                        onChange={this.handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Button
                        variant="secondary mr-2"
                        type="submit"
                        name="submit"
                      >
                        Submit
                      </Button>
                      <Button
                        variant="secondary"
                        type="reset"
                        name="reset"
                        onClick={this.handleReset}
                      >
                        Clear
                      </Button>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>
              <BottomDetails />
            </CardDeck>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default Contact;
