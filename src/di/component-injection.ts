import {object} from 'prop-types';

export function componentInject(target, propertyKey, identifier?) {
  const type = Reflect.getMetadata('design:type', target, propertyKey);
  const isArrayType = type === Array;
  identifier = identifier || type;
  ensureContainerContextExists(target.constructor);
  setDependentProperty(target, propertyKey, identifier, isArrayType);
}

function setDependentProperty(target, propertyKey, identifier, isArrayType) {
  const GET_KEY = isArrayType ? 'getAll' : 'get';
  const PREFIX = '$$';
  const prefixedPropertyKey = `${PREFIX}${propertyKey}`;

  Object.defineProperty(target, propertyKey, {
    configurable: true,
    enumerable: true,
    get() {
      if (!this[prefixedPropertyKey]) {
        this[prefixedPropertyKey] = this.context.container[GET_KEY](identifier);
      }
      return this[prefixedPropertyKey];
    },
    set(value) {
      this[prefixedPropertyKey] = value;
    }
  });
}

function ensureContainerContextExists(componentClass) {
  if (!componentClass.contextTypes) {
    componentClass.contextTypes = {};
  }
  if (!componentClass.contextTypes.container) {
    componentClass.contextTypes.container = object;
  }
}
