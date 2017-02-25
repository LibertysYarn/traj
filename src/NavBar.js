import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
              <div class="navbar-header">
                  <a class="navbar-brand" href="#">Estimate Range from Mil Measurement</a>
              </div>
              <div id="navbar" class="navbar-collapse collapse">
                  <ul class="nav navbar-nav navbar-right">
                      <li><button type="button" class="btn btn-primary">Imperial</button></li>
                      <li><button type="button" class="btn btn-danger">Metric</button></li>

                  </ul>
              </div>

          </div>
      </nav>

    );
  }
}

export default NavBar;
