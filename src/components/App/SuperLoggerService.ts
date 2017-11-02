import {Injectable} from '../../di/Injectable';
import {LoggerService} from './LoggerService';

@Injectable
export class SuperLoggerService implements LoggerService {
  log() {
    console.log('SUPER: AAAA');
  }
}
