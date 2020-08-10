import { IRepository, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateTeacherDto } from './dto/teachers.dto';
import { Teacher } from './types/teachers.types';

const teachersService = (usersRepository: IRepository): IService => {
  return {
    findAll: async (): Promise<Teacher[]> => {
      return await usersRepository.findAll();
    },
    findOne: async (id: number): Promise<Teacher> => {
      return await usersRepository.findOne(id);
    },
    create: async (body: CreateTeacherDto, user: ReqUser): Promise<Teacher> => {
      return await usersRepository.create(body, user);
    },
    update: async (
      body: CreateTeacherDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Teacher>> => {
      return await usersRepository.update(body, id, user);
    },
    delete: async (id: number): Promise<void> => {
      return await usersRepository.delete(id);
    },
  };
};

export default teachersService;
