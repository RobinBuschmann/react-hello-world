import 'reflect-metadata';
import {componentInject} from './component-injection';
import {inject, interfaces} from 'inversify';
import ServiceIdentifier = interfaces.ServiceIdentifier;

export function Inject(target: object, propertyKey: string | symbol, parameterIndex: number);
export function Inject(target: object, propertyKey: string | symbol);
export function Inject(identifier: any);
export function Inject(...args: any[]) {
  if (args.length > 1) {
    const [target, propertyKey, parameterIndex] = args;
    const identifier = Reflect.getMetadata('design:paramtypes', target);
    decorate(target, propertyKey, parameterIndex, identifier);
  } else {
    const identifier = args[0];
    return (target: object, propertyKey: string | symbol, parameterIndex?: number) => {
      decorate(target, propertyKey, parameterIndex, identifier);
    };
  }
}

function decorate(target: object,
                  propertyKey: string | symbol,
                  parameterIndex: number | undefined,
                  identifier: ServiceIdentifier<any>) {
  const isParameterInjection = typeof parameterIndex === 'number';
  if (isParameterInjection) {
    inject(identifier)(target, propertyKey as string, parameterIndex);
  } else {
    componentInject(target, propertyKey, identifier);
  }
}
