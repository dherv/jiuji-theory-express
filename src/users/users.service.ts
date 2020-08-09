import { IUserRepository, IUserService } from '../../types/interfaces';
import { CreateUserDto } from './dto/users.dto';
import { User } from './types/users.types';

const usersService = (usersRepository: IUserRepository): IUserService => {
  return {
    findAll: async <User>(): Promise<User[]> => {
      return await usersRepository.findAll();
    },
    findOne: async <User>(id: number): Promise<User> => {
      return await usersRepository.findOne(id);
    },
    findOneByEmailWithPassword: async <User>(email: string): Promise<User> => {
      return await usersRepository.findOneByEmailWithPassword(email);
    },
    create: async (body: CreateUserDto): Promise<User> => {
      return await usersRepository.create(body);
    },
    update: async <User, CreateUserDto>(
      body: CreateUserDto,
      id: number
    ): Promise<Partial<User>> => {
      return await usersRepository.update(body, id);
    },
    delete: async (id: number) => {
      return await usersRepository.delete(id);
    },
  };
};

export default usersService;
