import { fileDTO } from 'src/modules/users/dto/user.dto';

export abstract class IStorage {
  abstract upload(file: fileDTO, folder: string): Promise<any>;
}
