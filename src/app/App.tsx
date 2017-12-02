import * as React from 'react';
import './App.scss';
import {Component} from 'react';
import {Module} from 'react.di';
import {HelloWorld} from './hello-world/HelloWorld';

@Module()
export class App extends Component {
  render() {
    return <HelloWorld/>;
  }
}
