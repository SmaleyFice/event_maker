import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import Help from "./Pages/Help";
import Login from "./Pages/Login"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Help" element={<Help />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
