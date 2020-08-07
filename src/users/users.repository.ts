import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { CreateUserDto } from './dto/users.dto';
import { User } from './types/users.types';

const prisma = new PrismaClient();

const usersRepository = (): IRepository => {
  return {
    findAll: async (): Promise<User[]> => {
      return await prisma.user.findMany();
    },
    findOne: (id: number): Promise<void> => {
      return Promise.resolve();
    },
    create: async (body: CreateUserDto): Promise<User> => {
      return await prisma.user.create({
        data: {
          email: body.email,
          name: body.name,
          belt: body.belt,
          Location: {
            connect: { id: body.location.id },
          },
          Club: {
            connect: { id: body.club.id },
          },
        },
      });
    },
    update: (body: any, id: number): Promise<void> => {
      return Promise.resolve();
    },
    delete: (id: number): Promise<void> => {
      return Promise.resolve();
    },
  };
};

export default usersRepository;
