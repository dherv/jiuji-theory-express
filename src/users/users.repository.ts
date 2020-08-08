import { PrismaClient, User } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { CreateUserDto } from './dto/users.dto';

const prisma = new PrismaClient();

const usersRepository = (): IRepository => {
  return {
    findAll: async (): Promise<User[]> => {
      return await prisma.user.findMany();
    },
    findOne: async (id: number): Promise<User | null> => {
      return await prisma.user.findOne({
        where: { id },
      });
    },
    create: async (body: CreateUserDto): Promise<User> => {
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
    update: async (body: CreateUserDto, id: number): Promise<Partial<User>> => {
      const { email, name, belt, location, club } = body;
      return await prisma.user.update({
        where: { id },
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
        select: {
          id: true,
          name: true,
        },
      });
    },
    delete: async (id: number): Promise<void> => {
      return;
    },
  };
};

export default usersRepository;
