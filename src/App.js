import "./App.css";
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./home.jsx";
import List from "./listOfObject.jsx";
import Contact from "./contact.jsx";



// import  Component  from "materialize-css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav> */}
         <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/listOfObject" element={<List />} />

  <Route path="/contact" element={<Contact />} />
</Routes>
        </div>
      </Router>
   
    </div>
   
  );
}

export default App;