import { PrismaService } from 'src/infra/database/prima.service';

export type CreateUserDTO = {
  username: string;
  password: string;
  email: string;
  name: string;
};

export class createUserUseCase {
  constructor(private prisma: PrismaService) {}
  async execute(data: CreateUserDTO) {
    const user = await this.prisma.user.findFirst({
      where: { OR: [{ username: data.username }, { email: data.email }] },
    });

    if (user) {
      throw new Error('User already exists');
    }

    return await this.prisma.user.create({ data });
  }
}
