import React, { Component } from 'react';
// import DATA from '../data';
import TargetForm from './target';
import MilForm from './mil';
import ResultsForm from './range';
// import Windage from './windage';
// import './style.css';

class TargetRangeBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
<div>
<ResultsForm />
<MilForm />
<TargetForm />

</div>

 )
 }
}
export default TargetRangeBox;
