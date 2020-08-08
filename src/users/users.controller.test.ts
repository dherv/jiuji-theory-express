import { mockNext, mockRequest, mockResponse, mockService } from '../../jest/mocks';
import usersController from './users.controller';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all users', () => {
  return usersController(mockService)
    .findAll(mockRequest, mockResponse, mockNext)
    .then((response) => {
      expect(mockService.findAll).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith({
        users: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: 'json returned value' });
    });
});
test('findOne() should return one user', () => {
  return usersController(mockService)
    .findOne(mockRequest, mockResponse, mockNext)
    .then((response) => {
      expect(mockService.findOne).toHaveBeenCalled();
      expect(mockResponse.json).toHaveBeenCalledWith({
        user: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: 'json returned value' });
    });
});
test('create() should create one', () => {
  return usersController(mockService)
    .create(mockRequest, mockResponse, mockNext)
    .then((response) => {
      const { body } = mockRequest;
      expect(mockService.create).toHaveBeenCalledWith(body);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: 'created',
        user: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: 'json returned value' });
    });
});
test('update() should update one', () => {
  return usersController(mockService)
    .update(mockRequest, mockResponse, mockNext)
    .then((response) => {
      const {
        body,
        params: { id },
      } = mockRequest;

      expect(mockService.update).toHaveBeenCalledWith(body, id);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: 'updated',
        user: { data: 'mockResults' },
      });
      expect(response).toEqual({ data: 'json returned value' });
    });
});
