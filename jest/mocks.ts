import { Request } from 'express';

export const mockResults = { data: 'mockResults' };
export const mockService = {
  findOne: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  findAll: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  create: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  update: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  delete: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
};
export const mockResponse = {
  status: jest.fn().mockReturnValue(200),
  json: jest.fn().mockReturnValue({ data: 'json returned value' }),
} as any;
export const mockRequest = {
  params: { id: 1 },
  body: {},
} as any;
export const mockNext = {} as any;

export const mockArgs = {
  body: {},
  id: 1,
};

export const mockRepository = {
  findOne: jest.fn().mockImplementation(() => ({ data: 'mockRepository' })),
  findAll: jest.fn().mockImplementation(() => [{ data: 'mockRepository' }]),
  create: jest.fn().mockImplementation(() => ({ data: 'mockRepository' })),
  update: jest.fn().mockImplementation(() => ({ data: 'mockRepository' })),
  delete: jest.fn().mockImplementation(() => ({ data: 'mockRepository' })),
};
