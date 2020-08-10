import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';

const submissionsController = (submissionsService: IService): IController => {
  return {
    findAll: async (req: Request, res: Response) => {
      try {
        const submissions = await submissionsService.findAll();
        return res.json({ submissions });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    findOne: async (req: Request, res: Response) => {
      try {
        const {
          params: { id },
        } = req;
        const submission = await submissionsService.findOne(Number(id));
        return res.json({ submission });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body, user } = req;
        const submission = await submissionsService.create(
          body,
          user as ReqUser
        );
        return res.json({ message: 'created', submission });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    update: async (req: Request, res: Response) => {
      try {
        const {
          body,
          params: { id },
          user,
        } = req;
        const submission = await submissionsService.update(
          body,
          Number(id),
          user as ReqUser
        );
        return res.json({
          message: 'updated',
          submission,
        });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    delete: async (req: Request, res: Response) => {
      try {
        const {
          params: { id },
        } = req;
        const submission = await submissionsService.delete(Number(id));
        return res.json({ message: 'deleted', submission });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default submissionsController;
