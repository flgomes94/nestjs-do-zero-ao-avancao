import { PrismaService } from 'src/infra/database/prima.service';
import {
  usernameAndEmail,
  UserCreatedDTO,
  CreateUserDTO,
} from '../../dto/user.dto';
import { IUserRepository } from '../user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserPrismaRepository implements IUserRepository {
  constructor(private prisma: PrismaService) {}

  async findByUsernameOrEmail(
    data: usernameAndEmail,
  ): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findFirst({
      where: { OR: [{ username: data.username }, { email: data.email }] },
    });
  }
  async save(data: CreateUserDTO): Promise<UserCreatedDTO> {
    return await this.prisma.user.create({ data });
  }

  async findByUsername(username: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findUnique({
      where: { username: username },
    });
  }

  async findById(id: string): Promise<UserCreatedDTO | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async uploadAvatar(id: string, path: string): Promise<void> {
    await this.prisma.user.update({ data: { avatarUrl: path }, where: { id } });
  }
}
