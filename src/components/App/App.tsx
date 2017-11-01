import * as React from 'react';
import './App.scss';
import {Parent} from '../../di/Parent';

export const App = () => (
  <div className="app">
    <Parent value={'hello'} />
  </div>
);
