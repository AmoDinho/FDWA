import React, { Component } from "react";
import { Grid, Col, Row } from "react-bootstrap";
import { Query } from "react-apollo";
import { helloWorld } from "../graphql/Queries";
import "../styles/styles.css";

export default class helloWorldQuery extends Component {
  render() {
    return (
      <div className="Home">
        <div className="landingPage">
          <h1>Hello World</h1>
          <h3>GraphQL - Hello World Query</h3>
            <Grid>
              <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                  <h5><u>Output</u></h5>
                </Col>
                <Col xs={6} md={4}>
                </Col>
              </Row>
              <Row>
                <Col xs={6} md={4}>
                </Col>
                <Col xs={6} md={4}>
                  <Query query={ helloWorld }>
                    {({error, loading, data}) => {
                      if (loading) return <div>Fetching</div>;
                      if (error) return <div>Error</div>;
                      const returnValue = data.hello
                      return(
                        <div>
                          {returnValue}
                        </div>
                      )
                    }}
                  </Query>
                </Col>
                <Col xs={6} md={4}>
                </Col>
              </Row>
            </Grid>
        </div>
      </div>
    );
  }
}
