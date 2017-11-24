import {Injectable} from 'react.di';

@Injectable
export class StringService {

  toRandomCase(value: string): string {
    return Array.prototype.map.call(value, (char: string) => {
      const toUpperCase = Math.round(Math.random()) as 0|1;
      const caseMap = {
        0: 'toLowerCase',
        1: 'toUpperCase',
      };
      return char[caseMap[toUpperCase]]();
    }).join('');
  }

}
