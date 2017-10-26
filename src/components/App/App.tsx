import * as React from 'react';
import {Button} from 'antd';
import './App.scss';

export const App = () => (
  <div className="app">Hello World
    <Button onClick={() => console.log("test")}>Click me</Button>
  </div>
);
