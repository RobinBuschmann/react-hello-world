import * as React from 'react';
import {Component} from 'react';
import {Inject, Module} from 'react.di';
import {CommonModule} from '../common/CommonModule';
import {StringService} from '../common/StringService';
import {HelloWorldService} from './HelloWorldService';

@Module({
  imports: [CommonModule],
  providers: [HelloWorldService]
})
export class HelloWorld extends Component {

  @Inject stringService: StringService;
  @Inject helloWorldService: HelloWorldService;

  render() {
    const helloWorld = this.helloWorldService.getHelloWorld();
    return (<div>{this.stringService.toRandomCase(helloWorld)}</div>);
  }
}
