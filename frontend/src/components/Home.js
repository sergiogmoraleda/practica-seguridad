import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
class Home extends Component {
  render() {
    return (
       
      <div className="list">
        <ul>
          <li>
            <Link to="/login/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
