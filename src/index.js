import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Compte from "./Compte";
import Alerte from "./Alerte";
import CompteDetails from "./Compte[id]";
import AlerteDetails from "./Alerte[id]";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Helmet>
      <title>banquier App</title>
    </Helmet>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route exact path="/home" element={<Home />}></Route>
      <Route exact path="/compte" element={<Compte />}></Route>
      <Route exact path="/compte/:id" element={<CompteDetails />}></Route>
      <Route exact path="/alerte" element={<Alerte />}></Route>
      <Route exact path="/alerte/:id" element={<AlerteDetails />}></Route>

    </Routes>
  </Router>
);
