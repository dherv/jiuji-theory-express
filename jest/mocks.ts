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
  findOne: jest.fn().mockImplementation(() => 2),
  findAll: jest.fn().mockImplementation(() => 2),
  create: jest.fn().mockImplementation(() => 2),
  update: jest.fn().mockImplementation(() => 2),
  delete: jest.fn().mockImplementation(() => 2),
};
