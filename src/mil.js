import React, { Component } from 'react';
// import './style.css';

class Mil extends Component {
  render() {
    return (
<div className="col-sm-4">
    <form>
        //  <label htmlFor="InputMilHeight">Mil Height</label>
        <div className="form-inline">
            <div className="form-group">
                <input type="number" className="form-control" id="InputMilHeight" placeholder="Mil Height" />

                <select className="form-control">
        <option>Centimeters</option>
        <option>Meters</option>
        <option>Inches</option>
        <option>Feet</option>
      </select>
            </div>
        </div>

        //  <label htmlFor="InputMilWidth">Mil Width</label>
        <div className="form-inline">
            <div className="form-group">
                <input type="number" className="form-control" id="InputMilWidth" placeholder="Mil Width" />

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

export default Mil;
