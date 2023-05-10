import { Injectable } from '@nestjs/common';
import { TOKEN } from './app.module';
import { Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject(TOKEN)
    private config: any,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }
}
