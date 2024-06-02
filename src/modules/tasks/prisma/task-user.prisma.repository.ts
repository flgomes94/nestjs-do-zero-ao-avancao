import { PrismaService } from 'src/infra/database/prima.service';
import { TaskUserRequestDTO, TaskUserResponseDTO } from '../dto/task-user.dto';
import { ITaskUserRepository } from '../repositories/task-user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskUserPrismaRepository implements ITaskUserRepository {
  constructor(private prisma: PrismaService) {}
  save(data: TaskUserRequestDTO): Promise<TaskUserResponseDTO> {
    return this.prisma.taskUser.create({
      data: {
        task: {
          create: {
            description: data.description,
            endAt: data.endAt,
            startAt: data.startAt,
            title: data.title,
            priority: data.priority,
            status: data.status,
          },
        },
        user: {
          connect: { id: data.userId },
        },
      },
    });
  }
}
