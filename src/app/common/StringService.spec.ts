import {Container} from 'react.di';
import {expect} from 'chai';
import {StringService} from './StringService';

describe('StringService', () => {
  const container = new Container({autoBindInjectable: true});
  const stringService = container.get(StringService);

  describe('toRandomCase', () => {

    it('should change the case of each char of one string randomly', () => {
      const value = 'This is some longer text to increase the likelihood of getting changed';
      expect(stringService.toRandomCase(value)).to.not.equal(value);
    });

  });

});
