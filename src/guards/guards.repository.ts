import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateGuardDto } from './dto/guards.dto';
import { Guard } from './types/guards.types';

const prisma = new PrismaClient();

const guardsRepository = (): IRepository => {
  return {
    findAll: async (): Promise<Guard[]> => {
      return await prisma.guard.findMany();
    },
    findOne: async (id: number): Promise<Guard | null> => {
      return await prisma.guard.findUnique({
        where: { id },
      });
    },
    create: async (body: CreateGuardDto, user: ReqUser): Promise<Guard> => {
      const { name } = body;
      return await prisma.guard.create({
        data: {
          name,
          user: {
            connect: { id: user.sub },
          },
        },
      });
    },
    update: async (
      body: CreateGuardDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Guard>> => {
      const { name } = body;
      return await prisma.guard.update({
        where: { id },
        data: {
          name,
          user: {
            connect: { id: user.sub },
          },
        },
      });
    },
    delete: async (id: number): Promise<Guard> => {
      return await prisma.guard.delete({
        where: { id },
      });
    },
  };
};

export default guardsRepository;
