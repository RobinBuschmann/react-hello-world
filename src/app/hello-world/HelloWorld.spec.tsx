import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import {expect} from 'chai';
import {TestBed} from 'react.di';
import {HelloWorld} from './HelloWorld';
import {HelloWorldService} from './HelloWorldService';

configure({adapter: new Adapter()});

describe('HelloWorld', () => {

  it('should print hello world randomly', () => {
    const wrapper = mount(
      <TestBed autoBindInjectable={true}>
        <HelloWorld/>
      </TestBed>
    );
    const helloWorldText = HelloWorldService.prototype.getHelloWorld();
    const rndHelloWorldText = wrapper.find('div').text();
    expect(rndHelloWorldText.toLowerCase()).to.eql(helloWorldText);
    expect(rndHelloWorldText).to.not.eql(helloWorldText);
  });

});
