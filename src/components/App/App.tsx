import * as React from 'react';
import './App.scss';
import {Module} from '../../di/Module';
import {LoggerService} from './LoggerService';
import {Child} from './Child';
import {INTERCEPTOR_TOKEN} from './Interceptor';
import {APIInterceptor} from './APIInterceptor';
import {JWTInterceptor} from './JWTInterceptor';
import {SubService} from './SubService';

export const App = () => (
  <div className="app">
    <Module autoBindInjectable={false}
            providers={[
              LoggerService,
              SubService,
              JWTInterceptor,
              {provide: INTERCEPTOR_TOKEN, useClass: APIInterceptor},
              {provide: INTERCEPTOR_TOKEN, useClass: JWTInterceptor},
              ]}>
      <Child/>
    </Module>
  </div>
);
