import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import BlogList from "./components/BlogList";
import { dummyBlogs } from "./utils/sampleData";
// import Header from "./components/Header";

const App = () => (
  <div className="container">
    {/* <Header title="My Blogs" /> */}
    <BlogList blogs={dummyBlogs} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
