import React, { Component } from "react";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../layout/Loader";
import Post from "./Post";
import { PostModal } from "./PostModal";

export class Posts extends Component {
  state = {
    posts: [],
    showModal: false,
    currentId: null,
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      this.setState({ posts: res.data });
    });
  }

  checkPosts = () => {
    if (this.state.posts.length > 0) {
      return this.state.posts.map((post) => {
        return (
          <Col md={6} lg={4} key={post.id}>
            <Post post={post} openModal={this.openModal} />
          </Col>
        );
      });
    } else {
      return <Loader />;
    }
  };

  openModal = (id) => {
    this.showModal();
    this.setState({ currentId: id });
  };

  showModal = () => {
    this.setState({ showModal: true });
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };

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

        <Row>{this.checkPosts()}</Row>

        <PostModal
          showModal={this.state.showModal}
          closeModal={this.closeModal}
          id={this.state.currentId}
        />
      </Container>
    );
  }
}

export default Posts;
