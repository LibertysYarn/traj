import React, { Component } from 'react';

//TODO allow only one to be selected
//Reusable button group creation form that calls on a nested array for name and value
class Dropdown extends Component {
  constructor(props){
      super(props);
      this.state = {unit: ''};
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
     this.setState({ unit: e.target.value });
   };
  render() {
    return (
      <span className="btn-group">
           { this.props.options.map(([text, value], i) => (

   	    <button type="button" className="btn btn-default" id={ text } key={ text }
   	      value={ value } onclick={this.handleChange}>
       	    { value }</button>

           ))
         }
       </span>
            );

}
}

export default Dropdown;
