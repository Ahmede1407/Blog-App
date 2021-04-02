import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "./Post";

export class Posts extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2 className="h3 text-primary border-bottom pb-3 mb-4">
              Latest Posts
            </h2>
          </Col>
        </Row>
        <Row>
          <Col md={6} lg={4}>
            <Post />
          </Col>
          <Col md={6} lg={4}>
            <Post />
          </Col>
          <Col md={6} lg={4}>
            <Post />
          </Col>
          <Col md={6} lg={4}>
            <Post />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Posts;
