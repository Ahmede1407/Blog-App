import React from "react";
import { Card, Button } from "react-bootstrap";
import postImg from "../../assets/images/postImg.jpg";

const Post = (props) => {
  return (
    <Card className="mb-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={postImg} />
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.body}</Card.Text>
        <Button
          variant="primary"
          onClick={() => props.openModal(props.post.id)}
        >
          open post
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Post;
