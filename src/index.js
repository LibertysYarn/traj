import React from 'react';
import ReactDOM from 'react-dom';
import TargetRanegBox from './TargetRangeBox';
import NavBar from './NavBar';
import './style.css';

ReactDOM.render(
  <NavBar />,
  document.getElementById("navbar")
);

ReactDOM.render(
  <TargetRanegBox />,
  document.getElementById('root')
);
