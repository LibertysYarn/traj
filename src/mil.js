import React, { Component } from 'react';
import Dropdown from './dropdown';
// import './style.css';
// var inputs = [["Centimeter", "cm"], ["Meter", "m"], ["Inch", "in"], ["Feet", "ft"]];
var units = ["cm", "m", "in", "ft"];

class MilForm extends Component {
 constructor(props) {
 super(props);
 this.state = { milHeight: '', milHeightUnit: '', milWidth: '', milWidthUnit: '' };
 this.handleMilHeightChange = this.handleMilHeightChange.bind(this);
 this.handleMilHeightUnitChange = this.handleMilHeightUnitChange.bind(this);
 this.handleMilWidthChange = this.handleMilWidthChange.bind(this);
 this.handleMilWidthUnitChange = this.handleMilWidthUnitChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleMilHeightChange(e) {
 this.setState({ milHeight: e.target.value });
 }
 handleMilHeightUnitChange(e){
   this.setState({ milHeightUnit: e.target.value });
 }
 handleMilWidthChange(e) {
 this.setState({ milWidth: e.target.value });
 }
 handleMilWidthUnitChange(e){
   this.setState({ milWidthUnit: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log(`${this.state.milHeight} said “${this.state.milWidth}”`)
 //we will be tying this into the POST method in a bit
 }

 render() {
 return (
   <div className="col-sm-4">
   <form
   onSubmit={ this.handleSubmit }>

         <div className="form-inline">
            <div className="form-group">
 <input
 type='number'
 placeholder='Mil Height'
 id='MilHeight'
 value={ this.state.id }
 className="form-control"
 onChange={ this.handleMilHeightChange } />

      <Dropdown
                        id={this.unit}
                        title={ this.placeholder }
                        options={units}
                        handleChange={this.handleMilHeightChange.bind(this)}/>

        </div>
        </div>
        <div className="form-inline">
                    <div className="form-group">
 <input
 type='number'
 placeholder='Mil Width'
 id='MilWidth'
 value={ this.state.id }
 className="form-control"
 onChange={ this.handleMilWidthChange } />

 <Dropdown
                   id={this.unit}
                   title={ this.placeholder }
                   options={units}
                   handleChange={this.handleMilWidthChange.bind(this)}/>

</div>

 </div>
                </form>
        </div>
 )
 }
 }

export default MilForm;

// <input
// type='submit'
//
// value='Submit' />
