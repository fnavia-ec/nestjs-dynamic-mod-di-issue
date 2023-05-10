import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

export const TOKEN = 'TOKEN';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    {
      provide: TOKEN,
      useValue: { test: 'test' },
    },
    AppService,
  ],
})
export class AppModule {}
