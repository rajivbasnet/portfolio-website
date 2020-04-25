import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck, Button } from "react-bootstrap";
import { getProjects } from "../details/projects";

class Projects extends Component {
  state = {
    projects: getProjects(),
  };

  cardStyles = {
    minWidth: "280px",
    marginBottom: "20px",
  };

  checkWebsite = (project) => {
    if (project.website) {
      return (
        <Button
          variant="secondary"
          className="btnLink"
          block
          to="route"
          target="_blank"
          href={project.website}
        >
          Visit Website
        </Button>
      );
    }
  };

  render() {
    const { length: count } = this.state.projects;
    const { projects } = this.state;
    if (count === 0) return <p>There are no projects in the Database!</p>;

    return (
      <React.Fragment>
        <div className="bg-white" id="projects">
          <Container>
            <Row>
              <Col>
                <p
                  className="h5 font-weight-bold text-center"
                  style={{ color: "#000000" }}
                >
                  {" "}
                  PROJECTS{" "}
                </p>
              </Col>
            </Row>
            <hr className="my-4" />
            <br />
            <CardDeck>
              {projects.map((project) => (
                <Card key={project._id} style={this.cardStyles}>
                  <Card.Body>
                    <Card.Img
                      variant="top"
                      src={require(`${project.imgsrc}`)}
                      style={{ marginBottom: "20px" }}
                    />

                    <Card.Title>
                      <b>{project.title} </b>
                    </Card.Title>
                    <Card.Text>
                      {" "}
                      <b>Tools Used : </b>{" "}
                      <small className="text-muted">
                        {" "}
                        {project.tools.join(" | ")}
                      </small>
                    </Card.Text>
                    <Card.Text>{project.description}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    {this.checkWebsite(project)}
                    <Button
                      variant="secondary"
                      className="btnLink"
                      block
                      to="route"
                      target="_blank"
                      href={project.github}
                    >
                      See GitHub Repo
                    </Button>
                  </Card.Footer>
                </Card>
              ))}
              <br />
            </CardDeck>
          </Container>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
