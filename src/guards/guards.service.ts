import { IRepository, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateGuardDto } from './dto/guards.dto';
import { Guard } from './types/guards.types';

const guardsService = (usersRepository: IRepository): IService => {
  return {
    findAll: async (): Promise<Guard[]> => {
      return await usersRepository.findAll();
    },
    findOne: async (id: number): Promise<Guard> => {
      return await usersRepository.findOne(id);
    },
    create: async (body: CreateGuardDto, user: ReqUser): Promise<Guard> => {
      return await usersRepository.create(body, user);
    },
    update: async (
      body: CreateGuardDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Guard>> => {
      return await usersRepository.update(body, id, user);
    },
    delete: async (id: number): Promise<void> => {
      return await usersRepository.delete(id);
    },
  };
};

export default guardsService;
