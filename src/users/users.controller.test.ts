import { mockNext, mockRequest, mockResponse, mockService } from '../../jest/mocks';
import { User } from './types/users.types';
import usersController from './users.controller';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all users', () => {
  return usersController(mockService)
    .findAll(mockRequest, mockResponse, mockNext)
    .then((response: User[]) => {
      expect(mockService.findAll).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith({
        users: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: {} });
    });
});
test('findOne() should return one user', () => {
  return usersController(mockService)
    .findOne(mockRequest, mockResponse, mockNext)
    .then((response: User[]) => {
      expect(mockService.findOne).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith({
        user: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: {} });
    });
});
test('create() should create one', () => {
  return usersController(mockService)
    .create(mockRequest, mockResponse, mockNext)
    .then((response: any) => {
      const { body } = mockRequest;
      expect(mockService.create).toHaveBeenCalledWith(body);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: 'created',
        user: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: {} });
    });
});
