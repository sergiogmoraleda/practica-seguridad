import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login"; 
import Signup from "./components/Signup";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App-header">
        
      <div className= "App">
      <h1>Parque de Vehiculos de Ciudad Real</h1>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </BrowserRouter>

      </div>
      </div>
    );
  }
}

export default App;
