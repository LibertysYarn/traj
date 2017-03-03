import React, { Component } from 'react';

// This Component should obviously be a class if you want it to work ;)
class Dropdown extends Component {
  render() {
    return (
                    <select id={this.props.id} name={this.props.id} type='select' className="form-control">
                        {this.props.options.map(function(option, i) {
                            return <option key={i}>{option}</option>
                        })}
                    </select>

            );
}
}

export default Dropdown;




// const inputs = [["Centimeter", "cm"], ["Meter", "m"], ["Inch", "in"], ["Feet", "ft"]]
