import { IRepository, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateClubDto } from './dto/clubs.dto';
import { Club } from './types/clubs.types';

const clubsService = (usersRepository: IRepository): IService => {
  return {
    findAll: async (): Promise<Club[]> => {
      return await usersRepository.findAll();
    },
    findOne: async (id: number): Promise<Club> => {
      return await usersRepository.findOne(id);
    },
    create: async (body: CreateClubDto, user: ReqUser): Promise<Club> => {
      return await usersRepository.create(body, user);
    },
    update: async (
      body: CreateClubDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Club>> => {
      return await usersRepository.update(body, id, user);
    },
    delete: async (id: number): Promise<void> => {
      return await usersRepository.delete(id);
    },
  };
};

export default clubsService;
