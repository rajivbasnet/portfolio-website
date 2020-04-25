import React, { Component } from "react";
import { Nav, Container } from "react-bootstrap";
import { getSocials } from "../details/social";

class NavBarTop extends Component {
  state = {
    socials: getSocials(),
  };
  render() {
    const { socials } = this.state;
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#212529" }}>
          <Container>
            <Nav className="mr-auto justify-content-end">
              {socials.map((social) => (
                <Nav.Link
                  key={social._id}
                  to="route"
                  rel="noopener noreferrer"
                  href={social.link}
                  target="_blank"
                >
                  <span
                    className="header-socials-icon-top"
                    style={{ marginRight: "0px" }}
                  >
                    <i className={social.icon_class}></i>
                  </span>
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBarTop;
