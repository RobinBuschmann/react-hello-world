import {Interceptor} from './Interceptor';
import {Injectable} from '../../di/decorators/Injectable';
import {Inject} from '../../di/decorators/Inject';
import {SubService} from './SubService';

@Injectable
export class APIInterceptor implements Interceptor {

  constructor(@Inject protected subService: SubService) {
  }

  use() {
  }
}
