export const mockResults = {};
export const mockService = {
  findOne: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  findAll: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  create: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  update: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
  delete: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
};
export const mockResponse = {
  status: jest.fn().mockReturnValue(200),
  json: jest.fn().mockReturnValue({ data: {} }),
};
export const mockRequest = {
  params: { id: 1 },
  body: {},
};
export const mockNext = {};

export const mockArgs = {
  body: {},
  id: 1,
};

export const mockRepository = {
  findOne: jest.fn().mockImplementation(() => {}),
  findAll: jest.fn().mockImplementation(() => [{ message: 'test findAll' }]),
  create: jest.fn().mockImplementation(() => ({ message: 'test create' })),
  update: jest.fn().mockImplementation(() => {}),
  delete: jest.fn().mockImplementation(() => {}),
};
