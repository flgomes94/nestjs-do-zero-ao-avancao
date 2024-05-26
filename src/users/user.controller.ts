import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ParamsUser = {
  id: string;
  idEmpresa: string;
};

type QueriesUser = {
  page: string;
};

type BodyUser = {
  name: string;
  age: string;
};

@Controller('users')
export class UserController {
  @Get('/helloUser')
  helloUser() {
    return 'Bem vindo ao curso de Nestjs';
  }

  @Get('/:id/:idEmpresa')
  findById(@Param() params: ParamsUser) {
    return 'Usuário de id ' + params.id + ' Empresa Id ' + params.idEmpresa;
  }

  @Get('/findByPage')
  findByPages(@Query() queries: QueriesUser) {
    return 'Queries ' + queries.page;
  }

  @Post('/create')
  create(@Body() data: BodyUser) {
    return { ...data, id: randomUUID() };
  }
}
