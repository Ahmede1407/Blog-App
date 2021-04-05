import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="loader">
      <Spinner
        className="d-flex justify-content-center"
        animation="border"
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
