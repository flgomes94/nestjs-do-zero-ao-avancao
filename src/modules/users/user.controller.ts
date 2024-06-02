import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CreateUserUseCase } from './useCases/create-user.usecase';
import { AuthGuard } from 'src/infra/providers/auth-guard.provider';
import { ProfileUserUseCase } from './useCases/profile-user.usecase';
import {
  CreateUserResponseSchemaDTO,
  CreateUserSchemaDTO,
} from './schemas/create-user.schema';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly profileUserUseCase: ProfileUserUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateUserSchemaDTO) {
    const user = await this.createUserUseCase.execute(data);
    return CreateUserResponseSchemaDTO.parse(user);
  }

  @Get('/profile')
  @UseGuards(AuthGuard)
  async profile(@Request() req) {
    return this.profileUserUseCase.execute(req.user.sub);
  }
}
