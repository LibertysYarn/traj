import React, { Component } from 'react';


class Dropdown extends Component {
  render() {
    return (
        // <span className="input-group">
        //             <input type='radio' id={this.props.id} name={this.props.id}>
        //                 {this.props.options.map(function(option, i) {
        //                     return <checked key={i}>{option}</checked>
        //                 })}
        //             </input>
        //
        //           </span>

        //  checked={ this.state.options === value }
        //  onChange={ /* You'll need an event function here */ }
<span>
           { this.props.options.map(([text, value], i) => (

   	    <button type="button" className="btn btn-default" key={ i }
   	      value={ value } >
       	    { text }</button>

           ))
         }
</span>
            );

}
}

export default Dropdown;
