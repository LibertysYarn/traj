import React, { Component } from 'react';
import './style.css';

class NavBar extends Component {
  render() {
return(
  <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
          <div className="navbar-header">
              <a className="navbar-brand" href="#"><img src="./logo.png"></img></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav navbar-right">
                  <li><button type="button" className="btn btn-primary">Imperial</button></li>
                  <li><button type="button" className="btn btn-danger">Metric</button></li>
              </ul>
          </div>
      </div>
  </nav>
   );
 }
};


export default NavBar;
