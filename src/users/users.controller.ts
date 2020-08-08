import { Request, Response } from 'express';
import { IController, IService } from '../../types/interfaces';

const usersControllers = (usersService: IService): IController => {
  return {
    findAll: async (_: Request, res: Response) => {
      try {
        const users = await usersService.findAll();
        return res.json({ users });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    findOne: async (req: Request, res: Response) => {
      const {
        params: { id },
      } = req;
      try {
        const user = await usersService.findOne(Number(id));
        return res.json({ user });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
    create: async (req: Request, res: Response) => {
      try {
        const { body } = req;
        const user = await usersService.create(body);
        return res.json({ message: 'created', user });
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
        } = req;
        const user = await usersService.update(body, Number(id));
        return res.json({ message: 'updated', user });
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
        const user = await usersService.delete(Number(id));
        return res.json({ message: 'deleted', user });
      } catch (error) {
        console.error(error);
        return res.json({ error });
      }
    },
  };
};

export default usersControllers;
