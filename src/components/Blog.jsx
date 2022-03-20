import React from "react";
import "./Blog.css";

function Blog() {
  return (
    <div className="blog near-top">
      <div className="container">
        <div className="row align-items-center my-5">
          <h1 className="font-weight-light text-center">kodingKoda - Blog</h1>
          <img
            className="img-fluid blog-image shadow mb-4 col-sm-5"
            src="https://i.imgur.com/S1o7NZg.jpg"
            alt="Under Construction"
          />
          <p className="text-center">Coming Soon!</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
