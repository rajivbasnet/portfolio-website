import React, { Component } from "react";
import bgimg from "./images/bgimage1.jpg";
import { Carousel } from "react-bootstrap";
import ReactRotatingText from "react-rotating-text";
import { getSocials } from "../details/social";

class Slider extends Component {
  state = {
    socials: getSocials(),
  };

  render() {
    const { socials } = this.state;
    return (
      <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={bgimg} alt="First slide" />
            <Carousel.Caption>
              <div>
                {/* <p className="textTop" style={{ color: "#212529" }}>
                  Hello, I am
                </p> */}
                <h3 className="myName"> &ndash; Rajiv Basnet &ndash; </h3>
                <p>
                  <ReactRotatingText
                    style={{ color: "#212529" }}
                    items={[
                      "I'm an aspiring Software Engineer...",
                      "...enthusiastic about modern CI/CD practices...",
                      "...and I sing for fun.",
                    ]}
                  />
                </p>
                <p>
                  {socials.map((social) => (
                    <a
                      key={social._id}
                      className="header-socials-icon ml-4 mr-4"
                      to="route"
                      rel="noopener noreferrer"
                      target="_blank"
                      href={social.link}
                    >
                      <span>
                        <i className={social.icon_class} href=""></i>
                      </span>
                    </a>
                  ))}
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Slider;
