import { Controller, Get } from '@nestjs/common';
import { CoreService } from './core.service';

@Controller('core')
export class CoreController {
  constructor(private readonly service: CoreService) {}

  @Get('/info')
  getInfo(): string {
    return this.service.getHello();
  }
}
