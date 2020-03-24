import { Controller, Get } from '@nestjs/common';

@Controller('app')
export class AppController {
  @Get('test-server')
  checkServer(): object {
    return { message: 'server OK' };
  }
}
