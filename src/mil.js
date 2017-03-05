import React, { Component } from 'react';
import InputGroup from './inputGroup';

class MilForm extends Component {
 constructor(props) {
 super(props);
 this.state = { milHeight: '', milHeightUnit: '', milWidth: '', milWidthUnit: '' };
 this.handleMilHeightChange = this.handleMilHeightChange.bind(this);
 this.handleMilWidthChange = this.handleMilWidthChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
 }
 handleMilHeightChange(e) {
 this.setState({ milHeight: e.target.value });
 }
 handleMilWidthChange(e){
   this.setState({ milHeightUnit: e.target.value });
 }
 handleSubmit(e) {
 e.preventDefault();
 console.log(`${this.state.milHeight} said “${this.state.milWidth}”`)
 //we will be tying this into the POST method in a bit
 }

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
