import { IRepository, IService } from '../../types/interfaces';
import { CreateUserDto } from './dto/users.dto';
import { User } from './types/users.interface';

const usersService = (usersRepository: IRepository): IService => {
  return {
    findAll: async () => {
      return await usersRepository.findAll();
    },
    findOne: async (id: number) => {
      return await usersRepository.findOne(id);
    },
    create: async (body: CreateUserDto): Promise<User> => {
      return await usersRepository.create(body);
    },
    update: async (body: any, id: number): Promise<any> => {
      return await usersRepository.update(body, id);
    },
    delete: async (id: number) => {
      return await usersRepository.delete(id);
    },
  };
};

export default usersService;
