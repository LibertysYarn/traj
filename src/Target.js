import React, { Component } from 'react';
import Dropdown from './dropdown';
import InputGroup from './inputGroup';
//used to render the button group below
var inputs = [["Centimeter", "cm"], ["Meter", "m"], ["Inch", "in"], ["Feet", "ft"]];
var value = [];
//event handler for buttons used in this form
class TargetForm extends Component {
 constructor(props) {
 super(props);
 this.state = { title: value };
 // this.handleTargetHeightChange = this.handleTargetHeightChange.bind(this);
 // this.handleTargetHeightUnitChange = this.handleTargetHeightUnitChange.bind(this);
 // this.handleTargetWidthChange = this.handleTargetWidthChange.bind(this);
 // this.handleTargetWidthUnitChange = this.handleTargetWidthUnitChange.bind(this);
 // this.handleSubmit = this.handleSubmit.bind(this);
 }
 // handleTargetHeightChange(e) {
 // this.setState({ targetHeight: e.target.value });
 // }
 // handleTargetHeightUnitChange(e){
 //   this.setState({ targetHeightUnit: e.target.value });
 // }
 // handleTargetWidthChange(e) {
 // this.setState({ targetWidth: e.target.value });
 // }
 // handleTargetWidthUnitChange(e){
 //   this.setState({ targetWidthUnit: e.target.value });
 // }
 // setField(title, value) {
 //   this.setState({title: value});
 //   console.log('you typed: ' + value);
 // }
 // handleSubmit(e) {
 // e.preventDefault();
 // console.log(`${this.state.targetHeight} said “${this.state.targetWidth}”`)
 //we will be tying this into the POST method in a bit
 // }

//TODO tie to POST, calculate for vertical and horizontal, tie to Mil for calculations
//Renders the reusable inputGroup and Dropdown button group with assigned variables the target form-group
  render() {
    return (
      <div className="col-sm-4 myForm">
      <form >
          <fieldset>
           <legend>Enter Targets</legend>

            <div className="form-inline">
               <div className="form-group">
                 <InputGroup
                   id='targetHeight'
                   type='number'
                   title='Target Height'
                   step='0.1'
                   min='0.1'
                   max='99'
                   size='3'
                   maxLength='5'
                   defaultValue='24'
                   value={ this.state.value }/>

                   <Dropdown
                       name='TgtHgtUnit'
                       options={inputs}
                       value={this.state.value}/>
                     </div>

                     </div>

                    <div className="form-inline">
                       <div className="form-group">
                           <InputGroup
                             id='TargetWidth'
                             type='number'
                             title='Target Width'
                             step='0.1'
                             min='0.1'
                             max='99'
                             size='3'
                             maxLength='5'
                             defaultValue='18'
                             value={ this.state.value } />


                               <Dropdown
                                 options={inputs}
                                 name='TgtWidthUnit'
                                 value={this.state.value}/>
</div>
                       </div>

                     </fieldset>

                     </form>
                   </div>

    );
  }
}
export default TargetForm;
