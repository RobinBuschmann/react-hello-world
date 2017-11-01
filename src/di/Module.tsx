import * as React from 'react';
import {Container} from 'inversify';
import {Component} from 'react';
import {Provider} from './Provider';
import {Binding} from './Binding';
import {bindClass} from './ClassBinding';
import {bindValue} from './ValueBinding';
import {bindFactory} from './FactoryBinding';

interface ModuleProps {
  providers?: Binding[];
}

export class Module extends Component<ModuleProps> {

  private container = new Container({autoBindInjectable: true});
  private bindings = {
    useClass: bindClass,
    useValue: bindValue,
    useFactory: bindFactory,
  };

  constructor(props, contenxt) {
    super(props, contenxt);
    this.executeBindings(props);
  }

  componentWillReceiveProps(props) {
    this.executeBindings(props);
  }

  executeBindings({providers}: ModuleProps) {
    (providers || []).forEach((provider) => {
      Object.keys(this.bindings)
        .forEach(key => {
          if (provider[key]) {
            this.bindings[key](this.container, provider);
          }
        });
    });
  }

  render() {
    return (
      <Provider container={this.container}>
        {this.props.children}
      </Provider>
    );
  }
}
