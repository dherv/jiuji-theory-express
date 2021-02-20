import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateTeacherDto } from './dto/teachers.dto';
import { Teacher } from './types/teachers.types';

const prisma = new PrismaClient();

const teachersRepository = (): IRepository => {
  return {
    findAll: async (): Promise<Teacher[]> => {
      return await prisma.teacher.findMany();
    },
    findOne: async (id: number): Promise<Teacher | null> => {
      return await prisma.teacher.findUnique({
        where: { id },
      });
    },
    create: async (body: CreateTeacherDto, user: ReqUser): Promise<Teacher> => {
      const { name, club } = body;
      console.log({ club });
      return await prisma.teacher.create({
        data: {
          name,
          club: {
            connect: { id: club.id },
          },
          user: {
            connect: { id: user.sub },
          },
        },
      });
    },
    update: async (
      body: CreateTeacherDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Teacher>> => {
      const { name, club } = body;
      return await prisma.teacher.update({
        where: { id },
        data: {
          name,
          club: {
            connect: { id: club.id },
          },
          user: {
            connect: { id: user.sub },
          },
        },
      });
    },
    delete: async (id: number): Promise<Teacher> => {
      return await prisma.teacher.delete({
        where: { id },
      });
    },
  };
};

export default teachersRepository;
