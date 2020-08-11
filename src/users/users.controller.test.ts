import {
  mockRequest,
  mockResponse,
  mockResults,
  mockService as baseMockService,
} from '../../jest/mocks';
import usersController from './users.controller';

const mockService = {
  ...baseMockService,
  findOneByEmailWithPassword: jest
    .fn()
    .mockImplementation(() => Promise.resolve(mockResults)),
};
afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  await usersController(mockService).findAll(mockRequest, mockResponse);
  expect(mockService.findAll).toHaveBeenCalled();
  expect(mockResponse.json).toHaveBeenCalledWith({
    users: { data: 'mockResults' },
  });
});

test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await usersController(mockService).findOne(mockRequest, mockResponse);
  expect(mockService.findOne).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    user: { data: 'mockResults' },
  });
});

test('create() should create one', async () => {
  await usersController(mockService).create(mockRequest, mockResponse);
  const { body } = mockRequest;
  expect(mockService.create).toHaveBeenCalledWith(body);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'created',
    user: { data: 'mockResults' },
  });
});
test('update() should update one', async () => {
  await usersController(mockService).update(mockRequest, mockResponse);
  const {
    body,
    params: { id },
  } = mockRequest;
  expect(mockService.update).toHaveBeenCalledWith(body, id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'updated',
    user: { data: 'mockResults' },
  });
});

test('delete() should remove one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await usersController(mockService).delete(mockRequest, mockResponse);
  expect(mockService.delete).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'deleted',
    user: { data: 'mockResults' },
  });
});
