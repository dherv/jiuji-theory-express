import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';

const clubsController = (clubsService: IService): IController => {
  return {
    findAll: async (req: Request, res: Response) => {
      try {
        const clubs = await clubsService.findAll();
        return res.json({ clubs });
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
        const club = await clubsService.findOne(Number(id));
        return res.json({ club });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body, user } = req;
        const club = await clubsService.create(body, user as ReqUser);
        return res.json({ message: 'created', club });
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
        const club = await clubsService.update(
          body,
          Number(id),
          user as ReqUser
        );
        return res.json({
          message: 'updated',
          club,
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
        const club = await clubsService.delete(Number(id));
        return res.json({ message: 'deleted', club });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default clubsController;
