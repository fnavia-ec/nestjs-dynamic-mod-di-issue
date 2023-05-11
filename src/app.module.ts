import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [AuthModule.forRoot({ isGlobal: true }), CoreModule],
})
export class AppModule {}
