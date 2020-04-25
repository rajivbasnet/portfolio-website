import React, { Component } from "react";
import profilepic from "./images/profilepic.jpg";
import { Container, Row, Col } from "react-bootstrap";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Container
          id="aboutme"
          data-spy="scroll"
          data-target="#navbar-bottom"
          style={{ color: "#000000" }}
        >
          <Row>
            <Col>
              <p
                className="h5 font-weight-bold text-center"
                style={{ color: "#000000" }}
              >
                {" "}
                ABOUT ME{" "}
              </p>
              <hr className="my-4" />
              <div align="justify" style={{ color: "#000000" }}>
                {" "}
                <p className="text-center">
                  <img
                    src={profilepic}
                    alt="Rajiv Basnet"
                    className="rounded-circle img-thumbnail"
                    style={{ height: "200px" }}
                  />
                </p>
                <p className="justify">
                  {" "}
                  The ingenuity of computers and the magic of mathematics have
                  amazed me since I was in my eighth grade. I rejoice the use of
                  artistic math involved in computational problem-solving.
                  Comprehending the how and the why involved in the process
                  sparkles my mind to acquire an in-depth knowledge.
                </p>
                <p>
                  {" "}
                  I am now a rising senior at St. Joseph’s College NY where I am
                  studying, it stands to reason, Computer Science and
                  Mathematics. Rather than choosing a specific discipline to
                  excel in, I am, here and now, determined in obtaining
                  analytical, usable-in-the-future skills in more generic areas
                  of study. I like to keep myself on the cutting edge and I
                  believe that’s what is and will be needed. I do have exciting
                  thoughts for my future.
                </p>
                <p>
                  I am currently working as a Software Engineer Intern at
                  Tarifica and have experiences working on a full-stack with
                  Python and JavaScript. My previous experience at Caldwell
                  University as a Web Development Technician has also enabled me
                  to demonstrare and incorporate skills regarding web design and
                  development.
                </p>
                <p>
                  I spend a great deal of my leisure watching movies and
                  tv-series. I am also a great admirer of music whatever the
                  genre. My guitar is my wife and my flutes are my girlfriends.
                  I spend quite a lot of my sweet time with them.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AboutMe;
