import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

class Footer extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#ffffff" }}>
          <Container>
            <footer>
              {" "}
              <Row>
                {" "}
                <Col>
                  <div className="d-flex justify-content-center text-secondary">
                    <p> © 2020 Copyright: Rajiv Basnet</p>
                  </div>
                </Col>
              </Row>
            </footer>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
