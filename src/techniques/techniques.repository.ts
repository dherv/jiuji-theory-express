import { PrismaClient } from '@prisma/client';
import { IRepository } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';
import { CreateTechniqueDto, UpdateTechniqueDto } from './dto/techniques.dto';
import { Step, Technique } from './types/techniques.types';

const prisma = new PrismaClient();

const techniquesRepository = (): IRepository => {
  return {
    findAll: async (): Promise<Technique[]> => {
      return await prisma.technique.findMany({
        include: { steps: true },
      });
    },
    findOne: async (id: number): Promise<Technique | null> => {
      return await prisma.technique.findOne({
        where: { id },
        include: { steps: true },
      });
    },
    create: async (
      body: CreateTechniqueDto,
      user: ReqUser
    ): Promise<Technique> => {
      const {
        name,
        guard,
        position,
        submission,
        teacher,
        steps,
        videos,
      } = body;

      const createSteps = steps
        .sort((a, b) => a.order - b.order)
        .map((step: Step) => ({
          ...step,
          user: { connect: { id: user.sub } },
        }));

      return await prisma.technique.create({
        data: {
          name,
          guard: { connect: { id: guard.id } },
          submission: { connect: { id: submission.id } },
          position: { connect: { id: position.id } },
          teacher: { connect: { id: teacher.id } },
          user: {
            connect: { id: user.sub },
          },
          videos: {
            connect: [...videos],
          },
          steps: {
            create: [...createSteps],
          },
        },
        include: {
          steps: true,
        },
      });
    },
    update: async (
      body: UpdateTechniqueDto,
      id: number,
      user: ReqUser
    ): Promise<Partial<Technique>> => {
      const {
        name,
        guard,
        position,
        submission,
        teacher,
        steps,
        videos,
      } = body;

      const upsertSteps = steps
        .filter((step) => !step.destroy)
        .sort((a, b) => a.order - b.order)
        .map((step, index) => {
          return {
            ...step,
            order: index + 1,
            user: { connect: { id: user.sub } },
          };
        })
        .map((step) => {
          const { destroy, id, ...rest } = step;
          return {
            create: {
              ...rest,
            },
            update: {
              ...rest,
            },
            where: { id: step.id },
          };
        });

      const deleteSteps = steps
        .filter((step) => step.destroy)
        .map((step) => ({ id: step.id }));

      return await prisma.technique.update({
        where: { id },
        data: {
          name,
          guard: { connect: { id: guard.id } },
          submission: { connect: { id: submission.id } },
          position: { connect: { id: position.id } },
          teacher: { connect: { id: teacher.id } },
          user: {
            connect: { id: user.sub },
          },
          videos: {
            connect: [...videos],
          },
          steps: {
            upsert: [...upsertSteps],
            delete: [...deleteSteps],
          },
        },
        include: {
          steps: true,
        },
      });
    },
    delete: async (id: number): Promise<Technique> => {
      const steps = (
        await prisma.technique.findOne({ where: { id } }).steps()
      ).map((step: Step) => ({ id: step.id }));
      await prisma.technique.update({
        where: { id },
        data: {
          steps: {
            delete: [...steps],
          },
        },
      });
      return await prisma.technique.delete({
        where: { id },
      });
    },
  };
};

export default techniquesRepository;
