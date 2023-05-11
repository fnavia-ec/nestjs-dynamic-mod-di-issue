import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { CoreController } from './core.controller';

@Module({
  imports: [AuthModule],
  controllers: [CoreController],
})
export class CoreModule {}
