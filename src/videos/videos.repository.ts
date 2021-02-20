import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateVideoDto } from './dto/videos.dto';
import { Video } from './types/videos.types';

const prisma = new PrismaClient();

const videosRepository = (): IRepository => {
  return {
    findAll: async (): Promise<Video[]> => {
      return await prisma.video.findMany();
    },
    findOne: async (id: number): Promise<Video | null> => {
      return await prisma.video.findUnique({
        where: { id },
      });
    },
    create: async (body: CreateVideoDto, user: ReqUser): Promise<Video> => {
      const { title, description, youtubeId, technique } = body;
      return await prisma.video.create({
        data: {
          title,
          description,
          youtubeId,
          user: {
            connect: { id: user.sub },
          },
          techniques: {
            connect: { id: technique.id },
          },
        },
      });
    },
    update: async (
      body: CreateVideoDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Video>> => {
      const { title, description, youtubeId, technique } = body;
      return await prisma.video.update({
        where: { id },
        data: {
          title,
          description,
          youtubeId,
          user: {
            connect: { id: user.sub },
          },
          techniques: {
            connect: { id: technique.id },
          },
        },
      });
    },
    delete: async (id: number): Promise<Video> => {
      return await prisma.video.delete({
        where: { id },
      });
    },
  };
};

export default videosRepository;
