import React, { Component } from 'react';
import Dropdown from './dropdown';
import InputGroup from './inputGroup';
var inputs = [["Centimeter", "cm"], ["Meter", "m"], ["Inch", "in"], ["Feet", "ft"]];
// var units = ["cm", "m", "in", "ft"];

class TargetForm extends Component {
 constructor(props) {
 super(props);
 this.state = { targetHeight: '', targetHeightUnit: '', targetWidth: '', targetWidthUnit: '' };
 this.handleTargetHeightChange = this.handleTargetHeightChange.bind(this);
 this.handleTargetHeightUnitChange = this.handleTargetHeightUnitChange.bind(this);
 this.handleTargetWidthChange = this.handleTargetWidthChange.bind(this);
 this.handleTargetWidthUnitChange = this.handleTargetWidthUnitChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleTargetHeightChange(e) {
 this.setState({ targetHeight: e.target.value });
 }
 handleTargetHeightUnitChange(e){
   this.setState({ targetHeightUnit: e.target.value });
 }
 handleTargetWidthChange(e) {
 this.setState({ targetWidth: e.target.value });
 }
 handleTargetWidthUnitChange(e){
   this.setState({ targetWidthUnit: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log(`${this.state.targetHeight} said “${this.state.targetWidth}”`)
 //we will be tying this into the POST method in a bit
 }


  render() {
    return (
      <div className="col-sm-8 myForm">
        <form onSubmit={ this.handleSubmit }>
          <fieldset>
           <legend>Enter Targets</legend>
           <div className="col-sm-12">


            <div className="form-inline">
               <div className="form-group">
                 <InputGroup
                   id='targetHeight'
                   type='number'
                   title='Target Height'
                   value={ this.state.id }
                   onChange={ this.handleTargetHeightChange }/>

                   <Dropdown
                       id={this.unit}
                       title={ this.placeholder }
                       options={inputs}
                       handleChange={this.handleTargetHeightUnitChange.bind(this)}/>

   </div>
                     </div>
                  </div>
                  <div className="col-sm-12">


                    <div className="form-inline">
                       <div className="form-group">
                           <InputGroup
                             id='TargetWidth'
                             type='number'
                             title='Target Width'
                             value={ this.state.id }
                             onChange={ this.handleTargetWidthChange } />


                               <Dropdown
                                 id={this.unit}
                                 title={ this.placeholder }
                                 options={inputs}
                                 handleChange={this.handleTargetWidthUnitChange.bind(this)}/>
</div>
                       </div>
                       </div>
                     </fieldset>

                     </form>
                   </div>

    );
  }
}
export default TargetForm;
