import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateClubDto } from './dto/clubs.dto';
import { Club } from './types/clubs.types';

const prisma = new PrismaClient();

const clubsRepository = (): IRepository => {
  return {
    findAll: async (): Promise<Club[]> => {
      return await prisma.club.findMany();
    },
    findOne: async (id: number): Promise<Club | null> => {
      return await prisma.club.findOne({
        where: { id },
      });
    },
    create: async (body: CreateClubDto, user: ReqUser): Promise<Club> => {
      const { name, location } = body;
      return await prisma.club.create({
        data: {
          name,
          user: {
            connect: { id: user.sub },
          },
          location: {
            connectOrCreate: {
              where: { id: location.id },
              create: {
                name: location.name,
                user: {
                  connect: { id: user.sub },
                },
              },
            },
          },
        },
      });
    },
    update: async (
      body: CreateClubDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Club>> => {
      const { name, location } = body;
      return await prisma.club.update({
        where: { id },
        data: {
          name,
          user: {
            connect: { id: user.sub },
          },
          location: {
            connectOrCreate: {
              where: { id: location.id },
              create: {
                name: location.name,
                user: { connect: { id: user.sub } },
              },
            },
          },
        },
      });
    },
    delete: async (id: number): Promise<Club> => {
      return await prisma.club.delete({
        where: { id },
      });
    },
  };
};

export default clubsRepository;
