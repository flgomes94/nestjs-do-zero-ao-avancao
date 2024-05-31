import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { PrismaService } from 'src/infra/database/prima.service';
import { SignInUseCase } from './useCases/sign-in.usecase';
import { JwtModule } from '@nestjs/jwt';
import { IUserRepository } from '../users/repositories/user.repository';
import { UserPrismaRepository } from '../users/repositories/prisma/user.prisma.repository';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'NESTJS_CURSO',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [LoginController],
  providers: [
    PrismaService,
    SignInUseCase,
    {
      provide: IUserRepository,
      useClass: UserPrismaRepository,
    },
  ],
})
export class LoginModule {}
