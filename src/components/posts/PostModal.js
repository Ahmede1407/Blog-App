import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import Loader from "../layout/Loader";

export class PostModal extends Component {
  state = {
    post: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.id && this.props.id !== prevProps.id) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + this.props.id)
        .then((res) => {
          this.setState({ post: res.data });
        });
    }
  }

  renderPost = () => {
    if (this.state.post) {
      return (
        <Modal
          onHide={this.props.closeModal}
          show={this.props.showModal}
          animation={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.state.post.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{this.state.post.body}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    } else {
      return <Loader />;
    }
  };
  render() {
    return <>{this.renderPost()}</>;
  }
}

export default PostModal;
