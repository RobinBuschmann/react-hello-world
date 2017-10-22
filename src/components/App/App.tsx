import * as React from 'react';
import './App.scss';
import {Button} from 'antd';

export const App = () => (
  <div className="app">Hello World
    <Button onClick={() => console.log("test")}>Click me</Button>
  </div>
);
