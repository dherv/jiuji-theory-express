import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { CreateUserDto } from './dto/users.dto';

const prisma = new PrismaClient();

const usersRepository = (): IRepository => {
  return {
    findAll: async <User>(): Promise<User[]> => {
      return await prisma.user.findMany();
    },
    findOne: async <User>(id: number): Promise<User> => {
      return await prisma.user.findOne({
        where: { id },
      });
    },
    create: async <B extends CreateUserDto, User>(body: B): Promise<User> => {
      const { email, name, belt, location, club } = body;
      return await prisma.user.create({
        data: {
          email: email,
          name: name,
          belt: belt,
          Location: {
            connect: { id: location.id },
          },
          Club: {
            connect: { id: club.id },
          },
        },
      });
    },
    update: async <B extends CreateUserDto, User>(
      body: B,
      id: number
    ): Promise<User> => {
      return;
    },
    delete: async (id: number): Promise<void> => {
      return;
    },
  };
};

export default usersRepository;
