import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateSubmissionDto } from './dto/submissions.dto';
import { Submission } from './types/submissions.types';

const prisma = new PrismaClient();

const submissionsRepository = (): IRepository => {
  return {
    findAll: async (): Promise<Submission[]> => {
      return await prisma.submission.findMany();
    },
    findOne: async (id: number): Promise<Submission | null> => {
      return await prisma.submission.findUnique({
        where: { id },
      });
    },
    create: async (
      body: CreateSubmissionDto,
      user: ReqUser
    ): Promise<Submission> => {
      const { name } = body;
      return await prisma.submission.create({
        data: {
          name,
          user: {
            connect: { id: user.sub },
          },
        },
      });
    },
    update: async (
      body: CreateSubmissionDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Submission>> => {
      const { name } = body;
      return await prisma.submission.update({
        where: { id },
        data: {
          name,
          user: {
            connect: { id: user.sub },
          },
        },
      });
    },
    delete: async (id: number): Promise<Submission> => {
      return await prisma.submission.delete({
        where: { id },
      });
    },
  };
};

export default submissionsRepository;
