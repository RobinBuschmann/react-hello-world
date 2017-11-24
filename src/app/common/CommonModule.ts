import {Module} from 'react.di';
import {StringService} from './StringService';

@Module({
  providers: [StringService]
})
export class CommonModule {
}
