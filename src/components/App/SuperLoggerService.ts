import {Injectable} from '../../di/decorators/Injectable';
import {LoggerService} from './LoggerService';

@Injectable
export class SuperLoggerService implements LoggerService {
  log() {
    console.log('SUPER: AAAA');
  }
}
