import { mockNext, mockRequest, mockResponse, mockService } from '../../jest/mocks';
import usersController from './users.controller';

test('it should create one', () => {
  return usersController(mockService)
    .create(mockRequest, mockResponse, mockNext)
    .then((response: any) => {
      const { body } = mockRequest;
      expect(mockService.create).toHaveBeenCalledWith(body);
      expect(mockResponse.json).toHaveBeenCalledWith({
        message: 'created',
        user: {},
      });
      expect(response).toEqual({ data: {} });
    });
});
