import {Injectable} from '../../di/decorators/Injectable';

@Injectable
export class LoggerService {

  log() {
    console.log('AAAA');
  }
}
