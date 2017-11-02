import * as React from 'react';
import {Component} from 'react';
import {Inject} from '../../di/Inject';
import {LoggerService} from './LoggerService';
import {Interceptor, INTERCEPTOR_TOKEN} from './Interceptor';
import {JWTInterceptor} from './JWTInterceptor';

export class Child extends Component {

  @Inject loggerService: LoggerService;
  @Inject(INTERCEPTOR_TOKEN) interceptors: Interceptor[];
  @Inject jwtInterceptor: JWTInterceptor;

  render() {
    this.loggerService.log();
    console.log(this.interceptors);
    console.log(this.jwtInterceptor);
    return (<div></div>);
  }
}
