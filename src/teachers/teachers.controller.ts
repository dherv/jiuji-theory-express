import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';

const teachersController = (teachersService: IService): IController => {
  return {
    findAll: async (req: Request, res: Response) => {
      try {
        const teachers = await teachersService.findAll();
        return res.json({ teachers });
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
        const teacher = await teachersService.findOne(Number(id));
        return res.json({ teacher });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body, user } = req;
        const teacher = await teachersService.create(body, user as ReqUser);
        return res.json({ message: 'created', teacher });
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
        const teacher = await teachersService.update(
          body,
          Number(id),
          user as ReqUser
        );
        return res.json({
          message: 'updated',
          teacher,
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
        const teacher = await teachersService.delete(Number(id));
        return res.json({ message: 'deleted', teacher });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default teachersController;
