import React, { Component } from 'react';
// import Dropdown from './dropdown';

class InputGroup extends Component {
  render() {
  return (
            <label className='label-name' htmlFor={this.props.id}>{this.props.title}<br />
                <input id={this.props.id} name={this.props.id} type={this.props.type}
                  placeholder={this.props.title} className='form-control'/>
            </label>
        )
    }
}

export default InputGroup;
