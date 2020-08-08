import { NextFunction, Request, Response } from 'express';

export interface IController {
  findAll: <T>(
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<T[]>>;
  findOne: <T>(
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<T>>;
  create: <T>(
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<T>>;
  update: <T>(
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<Response<Partial<T>>>;
  delete: <T>(
    req: Request,
    res: Response,
    next?: NextFunction
  ) => Promise<void>;
}

export interface IService {
  findAll: <T>() => Promise<T[]>;
  findOne: <T>(id: number) => Promise<T>;
  create: <B, T>(body: B) => Promise<T>;
  update: <B, T>(body: B, id: number) => Promise<Partial<T>>;
  delete: (id: number) => Promise<void>;
}

export interface IRepository {
  findAll: () => Promise<any>;
  findOne: (id: number) => Promise<any>;
  create: (body: any) => Promise<any>;
  update: (body: any, id: number) => Promise<any>;
  delete: (id: number) => Promise<void>;
}
