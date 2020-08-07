import { NextFunction, Request, Response } from 'express';

export interface IController {
  findAll: <T>(
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response<T[]>>;
  findOne: <T>(req: Request, res: Response, next: NextFunction) => Promise<T>;
  create: <T>(
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<Response<unknown>>;
  update: <T>(
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<{ message: string; data: T }>;
  delete: <T>(req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export interface IService {
  findAll: <T>() => Promise<T[]>;
  findOne: <T>(id: number) => Promise<T>;
  create: <B, T>(body: B) => Promise<T>;
  update: <B, T>(body: B, id: number) => Promise<T>;
  delete: (id: number) => Promise<void>;
}

export interface IRepository {
  findAll: <T>() => Promise<T[]>;
  findOne: <T>(id: number) => Promise<T>;
  create: <T>(body: any) => Promise<T>;
  update: <T>(body: any, id: number) => Promise<T>;
  delete: (id: number) => Promise<void>;
}
