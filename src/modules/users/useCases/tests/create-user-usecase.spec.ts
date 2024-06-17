import { Test } from '@nestjs/testing';
import { CreateUserUseCase } from '../create-user.usecase';
import { CreateUserDTO } from '../../dto/user.dto';
import { IUserRepository } from '../../repositories/user.repository';
import { UserInMemoryRepository } from '../../repositories/in-memory/user-in-memory.repository';

describe('CreateUserUseCase', () => {
  let createUserUseCase: CreateUserUseCase;
  beforeEach(async () => {
    const modRef = await Test.createTestingModule({
      providers: [
        CreateUserUseCase,
        {
          provide: IUserRepository,
          useClass: UserInMemoryRepository,
        },
      ],
    }).compile();

    createUserUseCase = modRef.get<CreateUserUseCase>(CreateUserUseCase);
  });

  it('Should be able to create a new user', async () => {
    const data: CreateUserDTO = {
      email: 'email@teste.com',
      name: 'Name',
      password: '1234',
      username: 'username',
    };
    const result = await createUserUseCase.execute(data);

    expect(result).toHaveProperty('id');
  });

  it('Should not be able to create a new user if username already exists', async () => {
    const data: CreateUserDTO = {
      email: 'email@teste.com',
      name: 'Name',
      password: '1234',
      username: 'username',
    };
    await createUserUseCase.execute(data);
    expect(createUserUseCase.execute(data)).rejects.toThrowError();
  });
});
