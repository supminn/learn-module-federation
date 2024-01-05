import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import BlogList from "./components/BlogList";
import { dummyBlogs } from "./utils/sampleData";
// @ts-ignore
import logo from "./assets/react.svg";
// @ts-ignore
import HeaderModule from "headerModule/Header";
const Header = HeaderModule.default;

const App = () => (
  <div className="container">
    <Header logo={logo} title="My Blogs" />
    <BlogList blogs={dummyBlogs} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
