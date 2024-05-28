import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDTO } from '../dto/user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform {
  transform(
    { name, email, username, password }: CreateUserDTO,
    metadata: ArgumentMetadata,
  ) {
    if (!name) {
      throw new HttpException(
        'Name is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (!email) {
      throw new HttpException(
        'Email is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (!username) {
      throw new HttpException(
        'Username is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    if (!password) {
      throw new HttpException(
        'Password is required',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return { name, email, username, password };
  }
}
