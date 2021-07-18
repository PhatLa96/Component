import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div >
        <nav className="navbar navbar-expand-lg navbar-dark  px-5">
          <a className="navbar-brand " href="#">
            Cybersoft
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Forum
                </a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
