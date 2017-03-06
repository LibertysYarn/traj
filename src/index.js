import React from 'react';
import ReactDOM from 'react-dom';
import TargetRangeBox from './TargetRangeBox';
import NavBar from './NavBar';
import './style.css';

//grabs components from navbar and TargetRangeBox and renders them on the home page
ReactDOM.render(
  <NavBar />,
  document.getElementById("navbar")
);

ReactDOM.render(
  <TargetRangeBox />,
  document.getElementById('root')
);
