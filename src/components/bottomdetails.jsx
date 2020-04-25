import React, { Component } from "react";
import { Card } from "react-bootstrap";

class BottomDetails extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Card
          style={{
            backgroundColor: "#f8f9fa",
            border: "0px",
          }}
        >
          <div className="text-center">
            <p className="text-justify">
              I'm an aspiring Software Engineer and have parallel interests in
              Mathematics and Data Science. Currently a rising senior at St.
              Joseph's College, I am also open to internships in these fields.{" "}
              <br /> <br />
              If you would like to add me to your network, please feel free to
              send me a quick message or shoot me an email. I will try getting
              back to you as soon as possible.
            </p>
            <br />
            <p>
              <a href="mailto:net.rajivbas@gmail.com">
                <i className="fa fa-google text-dark mr-2"> </i>
                <span>net.rajivbas@gmail.com</span>{" "}
              </a>
              <br />
              <i className="fa fa-home text-dark mr-2"> </i>
              <span>33-15 75th Street, Jackson Heights, NY 11372</span>{" "}
            </p>
          </div>
        </Card>
      </React.Fragment>
    );
  }
}

export default BottomDetails;
