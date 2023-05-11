import { DynamicModule, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AuthModuleSettings, AUTH_MODULE_SETTINGS } from './auth.def';
import { AuthInterceptor } from './auth.interceptor';
import { AuthService } from './auth.service';

@Module({
  providers: [
    AuthService,
    {
      provide: APP_INTERCEPTOR,
      useClass: AuthInterceptor,
    },
  ],
  exports: [AuthService],
})
export class AuthModule {
  static forRoot(settings?: AuthModuleSettings): DynamicModule {
    const authProvider = {
      provide: AUTH_MODULE_SETTINGS,
      useValue: settings,
    };

    return {
      module: AuthModule,
      global: settings?.isGlobal ?? false,
      providers: [authProvider],
      exports: [authProvider],
    };
  }
}
