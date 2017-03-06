import React, { Component } from 'react';
// import Dropdown from './dropdown';

//TODO call values from an array/object?
//Reusable single cell input form
class InputGroup extends Component {
  render() {
  return (
            <label className='label-name' htmlFor={this.props.id}>{this.props.title}<br />
                <input id={this.props.id} name={this.props.id} type={this.props.type}
                  placeholder={this.props.title} className='form-control'
                step={this.props.step} min={this.props.min} max={this.props.max}
              size={this.props.size} maxLength={this.props.maxlength}
            defaultValue={this.props.defaultValue}/>
            </label>
        )
    }
}

export default InputGroup;
