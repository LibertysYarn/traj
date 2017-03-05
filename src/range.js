import React, { Component } from 'react';
import Dropdown from './dropdown';
import InputGroup from './inputGroup';
// var inputs = [["Centimeter", "cm"], ["Meter", "m"], ["Inch", "in"], ["Feet", "ft"]];
var Up = [ ["Feet", "ft"],["Yard", "yd"] ];
var Range = [["Mil", "mil"],["MOA", "moa"]];

class ResultsForm extends Component {
 constructor(props) {
 super(props);
 this.state = { UpHeight: '', UpHeightUnit: '', range: '', rangeUnit: '' };
 this.handleUpHeightChange = this.handleUpHeightChange.bind(this);
 this.handleUpHeightUnitChange = this.handleUpHeightUnitChange.bind(this);
 this.handleRangeChange = this.handleRangeChange.bind(this);
 this.handleRangeUnitChange = this.handleRangeUnitChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleUpHeightChange(e) {
 this.setState({ UpHeight: e.target.value });
 }
 handleUpHeightUnitChange(e){
   this.setState({ UpHeightUnit: e.target.value });
 }
 handleRangeChange(e) {
 this.setState({ range: e.target.value });
 }
 handleRangeUnitChange(e){
   this.setState({ rangeUnit: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log(`${this.state.UpHeight} said “${this.state.range}”`)
 //we will be tying this into the POST method in a bit
 }


  render() {
    return (
      <div className="col-sm-12 myForm">
        <form onSubmit={ this.handleSubmit }>
          <fieldset>
           <legend>Show Results</legend>
           <div className="col-sm-6">
            <div className="form-inline">
               <div className="form-group">
                 <InputGroup
                   id='UpHeight'
                   type='number'
                   title='Up'
                   value={ this.state.id }
                   onChange={ this.handleUpHeightChange }/>

                   <Dropdown
                       id={this.unit}
                       title={ this.placeholder }
                       options={Up}
                       handleChange={this.handleUpHeightUnitChange.bind(this)}/>

                     </div>
                     </div>
                  </div>
                   <div className="col-sm-6">
                       <div className="form-inline">
                         <div className="form-group">
                           <InputGroup
                             id='Range'
                             type='number'
                             title='Range'
                             value={ this.state.id }
                             onChange={ this.handleRangeChange } />

                             <Dropdown
                                 id={this.unit}
                                 title={ this.placeholder }
                                 options={Range}
                                 handleChange={this.handleRangeUnitChange.bind(this)}/>

                               </div>
                         </div>
                       </div>
                     </fieldset>

                     </form>
                   </div>

    );
  }
}
export default ResultsForm;




// import React, { Component } from 'react';
//
// class Target extends Component {
//   render() {
//     return (
// <div className="col-sm-4">
//       <form>
//
//           //  <label htmlFor="InputDialHeight">`Range` and Dial Height</label>
//           <div className="form-inline">
//               <div className="form-group">
//                   <input type="email" className="form-control" id="InputRangeHeight" placeholder="Range Height">
//                   </input>
//                   <select className="form-control">
//             <option>Feet</option>
//             <option>Yards</option>
//           </select>
//               </div>
//           </div>
//
//           //  <label htmlFor="InputDialHeight">Dial/Hold Height</label>
//           <div className="form-inline">
//               <div className="form-group">
//                   <input type="email" className="form-control" id="InputDialHeight" placeholder="Dial/Hold Height">
// </input>
//
//                   <select className="form-control">
//             <option>Mil</option>
//             <option>MOA</option>
//           </select>
//               </div>
//           </div>
//           </form>
// </div>
//           // <br />
//       // </div>
//     );
//   }
// }
// export default TargetRange;
