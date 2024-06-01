import {
  CreateUserDTO,
  UserCreatedDTO,
  usernameAndEmail,
} from '../dto/user.dto';

export abstract class IUserRepository {
  abstract findByUsernameOrEmail(
    data: usernameAndEmail,
  ): Promise<UserCreatedDTO | null>;
  abstract save(data: CreateUserDTO): Promise<UserCreatedDTO>;
  abstract findByUsername(username: string): Promise<UserCreatedDTO | null>;
  abstract findById(id: string): Promise<UserCreatedDTO | null>;
}
