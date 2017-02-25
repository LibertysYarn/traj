import React, { Component } from 'react';
// import DATA from '../data';
// import style 'css/bootstrap.min.css';
import Target from './target';
import Mil from './mil';
import TargetRange from './range';
// import Windage from './windage';

class TargetRangeBox extends Component {
 constructor(props) {
 super(props);
 this.state = { data: [] };
 }
 render() {
 return (
<div>
<Mil />
<Target />
<TargetRange />

</div>

 )
 }
}
export default TargetRangeBox;
