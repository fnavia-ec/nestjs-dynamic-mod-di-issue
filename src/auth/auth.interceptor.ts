import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthModuleSettings, AUTH_MODULE_SETTINGS } from './auth.def';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  constructor(
    @Inject(AUTH_MODULE_SETTINGS) private readonly settings: AuthModuleSettings,
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      '🧨🧨 TCL -> ~ file: auth.interceptor.ts:13 ~ AuthInterceptor ~ settings:',
      JSON.stringify(this.settings),
    );

    return next.handle();
  }
}
