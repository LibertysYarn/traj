import React, { Component } from 'react';
// import DATA from '../data';
import Target from './target';
import MilForm from './mil';
import TargetRange from './range';
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
<MilForm />
<Target />
<TargetRange />

</div>

 )
 }
}
export default TargetRangeBox;
