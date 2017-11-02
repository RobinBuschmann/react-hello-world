import {Interceptor} from './Interceptor';
import {Injectable} from '../../di/Injectable';
import {Inject} from '../../di/Inject';
import {SubService} from './SubService';

@Injectable
export class APIInterceptor implements Interceptor {

  constructor(@Inject protected subService: SubService) {
  }

  use() {
  }
}
