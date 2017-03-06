import React, { Component } from 'react';
import logo from './logo.png';
import './style.css';

//TODO trigger auto-select or disabling of appropriate units on button press
//renders the top fixed navbar
class NavBar extends Component {
  render() {
return(
  <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand">
              <img src={ logo } className="logo" alt="logo" /></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
              {/* <ul className="nav navbar-nav navbar-right">
                  <li><button type="button" className="btn btn-top btn-primary">Imperial</button></li>
                  <li><button type="button" className="btn btn-top btn-danger">Metric</button></li>
              </ul> */}
          </div>
      </div>
  </nav>
  );
 }
};


export default NavBar;
