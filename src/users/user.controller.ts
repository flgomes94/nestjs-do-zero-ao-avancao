import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/helloUser')
  helloUser() {
    return 'Bem vindo ao curso de Nestjs';
  }
}
