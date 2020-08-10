import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';

const techniquesController = (techniquesService: IService): IController => {
  return {
    findAll: async (req: Request, res: Response) => {
      try {
        const techniques = await techniquesService.findAll();
        return res.json({ techniques });
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
        const technique = await techniquesService.findOne(Number(id));
        return res.json({ technique });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body, user } = req;
        const technique = await techniquesService.create(body, user as ReqUser);
        return res.json({ message: 'created', technique });
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
        const technique = await techniquesService.update(
          body,
          Number(id),
          user as ReqUser
        );
        return res.json({
          message: 'updated',
          technique,
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
        const technique = await techniquesService.delete(Number(id));
        return res.json({ message: 'deleted', technique });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default techniquesController;
