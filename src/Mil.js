import React, { Component } from 'react';
import InputGroup from './inputGroup';

//event handler for buttons used in this form
class MilForm extends Component {
 constructor(props) {
 super(props);
 this.state = { milHeight: '', milWidth: '' };
 this.handleMilHeightChange = this.handleMilHeightChange.bind(this);
 this.handleMilWidthChange = this.handleMilWidthChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleMilHeightChange(e) {
 this.setState({ milHeight: e.target.value });
 console.log(this.state);
 }
 handleMilWidthChange(e){
   this.setState({ milHeightUnit: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log(`${this.state.milHeight} said “${this.state.milWidth}”`)
 //we will be tying this into the POST method in a bit
 }

//renders the reusable inputGroup with assigned variables to the Mils form-inline
//TODO tie to POST, calculate for vertical and horizontal, tie to target for calculations
 render() {
 return (
   <div className="col-sm-4 myForm">
     <form onSubmit={ this.handleSubmit }>
       <fieldset>
        <legend>Enter Mils</legend>
         <div className="form-inline">
           <div className="form-group">
              <InputGroup
                id='MilHeight'
                type='number'
                title='Mil Height'
                step="0.05"
                min="0"
                max="10"
                size="5"
							  maxlength="5"
                value={ this.state.id }
                onChange={ this.handleMilHeightChange }/>

                <button type='submit' className="btn btn-default">
                  <span className="glyphicon glyphicon-resize-horizontal"></span>
                </button>


           </div>
        </div>
      <div className="form-inline">
        <div className="form-group">
          <InputGroup
            id='MilWidth'
            type='number'
            title='Mil Width'
            step="0.05"
            min="0"
            max="10"
            size="5"
            maxlength="5"
            value={ this.state.id }
            onChange={ this.handleMilWidthChange } />

            <button type='submit' className="btn btn-default">
              <span className="glyphicon glyphicon-resize-vertical"></span>
            </button>
</div>
      </div>
    </fieldset>

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
