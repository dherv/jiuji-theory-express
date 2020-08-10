import { IRepository, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateSubmissionDto } from './dto/submissions.dto';
import { Submission } from './types/submissions.types';

const submissionsService = (usersRepository: IRepository): IService => {
  return {
    findAll: async (): Promise<Submission[]> => {
      return await usersRepository.findAll();
    },
    findOne: async (id: number): Promise<Submission> => {
      return await usersRepository.findOne(id);
    },
    create: async (
      body: CreateSubmissionDto,
      user: ReqUser
    ): Promise<Submission> => {
      return await usersRepository.create(body, user);
    },
    update: async (
      body: CreateSubmissionDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Submission>> => {
      return await usersRepository.update(body, id, user);
    },
    delete: async (id: number): Promise<void> => {
      return await usersRepository.delete(id);
    },
  };
};

export default submissionsService;
