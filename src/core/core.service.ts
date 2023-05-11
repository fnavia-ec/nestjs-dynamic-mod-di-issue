import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class CoreService {
  constructor(private readonly authService: AuthService) {}

  getHello(): string {
    return `Hello World at ${this.authService.test()}!`;
  }
}
