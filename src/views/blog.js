import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import BolgHead from "../components/posts/bolgHead";
import Posts from "../components/posts/Posts";

const Blog = () => {
  return (
    <div>
      <Header />
      <BolgHead />
      <Posts />
      <Footer />
    </div>
  );
};

export default Blog;
