import React, { Component } from 'react';
// import './style.css';

class Target extends Component {
  render() {
    return (
<div className="col-sm-4">
        <form>
          //  <label htmlFor="InputTargetHeight">Target Height</label>
          <div className="form-inline">
              <div className="form-group">
                  <input type="email" className="form-control" id="InputTargetHeight" placeholder="Target Height">
                  </input>

                  <select className="form-control">
            <option>Centimeters</option>
            <option>Meters</option>
            <option>Inches</option>
            <option>Feet</option>
          </select>
              </div>
          </div>

            // <label htmlFor="InputTargetWidth">Target Width</label>
          <div className="form-inline">
              <div className="form-group">
                  <input type="email" className="form-control" id="InputTargetWidth" placeholder="Target Width">
                  </input>
                  <select className="form-control">
            <option>Centimeters</option>
            <option>Meters</option>
            <option>Inches</option>
            <option>Feet</option>
          </select>
              </div>
          </div>
          </form>
          </div>
    );
  }
}
export default Target;
