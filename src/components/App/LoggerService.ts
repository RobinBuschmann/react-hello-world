import {Injectable} from '../../di/Injectable';

@Injectable
export class LoggerService {

  log() {
    console.log('AAAA');
  }
}
