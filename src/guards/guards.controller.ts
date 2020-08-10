import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';
import { ReqUser } from '../users/types/users.types';

const guardsController = (guardsService: IService): IController => {
  return {
    findAll: async (req: Request, res: Response) => {
      try {
        const guards = await guardsService.findAll();
        return res.json({ guards });
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
        const guard = await guardsService.findOne(Number(id));
        return res.json({ guard });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body, user } = req;
        const guard = await guardsService.create(body, user as ReqUser);
        return res.json({ message: 'created', guard });
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
        const guard = await guardsService.update(
          body,
          Number(id),
          user as ReqUser
        );
        return res.json({
          message: 'updated',
          guard,
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
        const guard = await guardsService.delete(Number(id));
        return res.json({ message: 'deleted', guard });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default guardsController;
