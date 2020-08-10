import { IRepository, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateTechniqueDto } from './dto/techniques.dto';
import { Technique } from './types/techniques.types';

const techniquesService = (usersRepository: IRepository): IService => {
  return {
    findAll: async (): Promise<Technique[]> => {
      return await usersRepository.findAll();
    },
    findOne: async (id: number): Promise<Technique> => {
      return await usersRepository.findOne(id);
    },
    create: async (
      body: CreateTechniqueDto,
      user: ReqUser
    ): Promise<Technique> => {
      return await usersRepository.create(body, user);
    },
    update: async (
      body: CreateTechniqueDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Technique>> => {
      return await usersRepository.update(body, id, user);
    },
    delete: async (id: number): Promise<void> => {
      return await usersRepository.delete(id);
    },
  };
};

export default techniquesService;
