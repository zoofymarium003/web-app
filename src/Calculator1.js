import React from 'react';
import ReactDOM from 'react-dom';

import {add,sub,mul,div} from './Calculator';


ReactDOM.render(
  <>
  <ul>
    <li> { add(12,34) }</li>
    <li> {sub(12,6)} </li>
    <li> {mul(12,6)} </li>
    <li> {div(16,4)} </li>
  </ul>
  </>,document.getElementById('root')
);