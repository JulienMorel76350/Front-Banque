import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./About";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Helmet>
      <title>banquier App</title>
    </Helmet>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/about" element={<About />}></Route>
    </Routes>
  </Router>
);
