import { PrismaClient } from '@prisma/client';
import { IBCryptService, IUserRepository } from '../../types/interfaces';
import { CreateUserDto, UpdateUserDto } from './dto/users.dto';
import { User } from './types/users.types';

const prisma = new PrismaClient();

const usersRepository = (bCryptService: IBCryptService): IUserRepository => {
  const select = {
    id: true,
    email: true,
    name: true,
    belt: true,
    started: true,
    createdAt: true,
  };
  return {
    findAll: async (): Promise<User[]> => {
      return await prisma.user.findMany({ select: { ...select } });
    },
    findOne: async (id: number): Promise<User | null> => {
      return await prisma.user.findUnique({
        where: { id },
        select: { ...select },
      });
    },
    findOneByEmailWithPassword: async (email: string): Promise<User | null> => {
      return await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          name: true,
          email: true,
          belt: true,
          password: true,
        },
      });
    },
    create: async (body: CreateUserDto): Promise<User> => {
      const { email, name, belt, password } = body;
      const hash = await bCryptService.hash(password);
      return await prisma.user.create({
        data: {
          name: name,
          email: email,
          password: hash,
          belt: belt,
        },
        select: { ...select },
      });
    },
    update: async (body: UpdateUserDto, id: number): Promise<Partial<User>> => {
      const { email, name, belt } = body;
      return await prisma.user.update({
        where: { id },
        data: {
          email: email,
          name: name,
          belt: belt,
        },
        select: {
          id: true,
          name: true,
        },
      });
    },
    delete: async (id: number): Promise<User> => {
      return await prisma.user.delete({
        where: { id },
        select: { ...select },
      });
    },
  };
};

export default usersRepository;
