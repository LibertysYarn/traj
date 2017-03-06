import React, { Component } from 'react';
import TargetForm from './Target';
import MilForm from './Mil';
import ResultsForm from './Range';
// import Windage from './Windage';
// import DATA from '../data';


// Renders the top  three boxes containing the Results from Target size and Mils
class TargetRangeBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
<div>
<MilForm />
<TargetForm />
<ResultsForm />

</div>

 )
 }
}
export default TargetRangeBox;
