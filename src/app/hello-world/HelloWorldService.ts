import {Injectable} from 'react.di';

@Injectable
export class HelloWorldService {

  getHelloWorld() {
    return 'hello world';
  }
}
