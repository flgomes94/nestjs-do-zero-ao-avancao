import { Injectable } from '@nestjs/common';
import { TaskUserRequestDTO, TaskUserResponseDTO } from '../dto/task-user.dto';

@Injectable()
export abstract class ITaskUserRepository {
  abstract save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO>;
}
