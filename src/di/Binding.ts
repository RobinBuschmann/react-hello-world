import {interfaces} from 'inversify';
import ServiceIdentifier = interfaces.ServiceIdentifier;
import {ClassBinding} from './ClassBinding';
import {ValueBinding} from './ValueBinding';
import {FactoryBinding} from './FactoryBinding';

export type Binding = ClassBinding | ValueBinding | FactoryBinding;

export interface BaseBinding {
  provide: ServiceIdentifier<any>;
}
