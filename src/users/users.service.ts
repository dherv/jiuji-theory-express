import { IRepository, IService } from '../../types/interfaces';

const usersService = (usersRepository: IRepository): IService => {
  return {
    findAll: async <User>(): Promise<User[]> => {
      return await usersRepository.findAll();
    },
    findOne: async <User>(id: number): Promise<User> => {
      return await usersRepository.findOne(id);
    },
    create: async <User, CreateUserDto>(body: CreateUserDto): Promise<User> => {
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
