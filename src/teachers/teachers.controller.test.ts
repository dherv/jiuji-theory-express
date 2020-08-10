import { mockRequest, mockResponse, mockService } from '../../jest/mocks';
import teachersController from './teachers.controller';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  await teachersController(mockService).findAll(mockRequest, mockResponse);
  expect(mockService.findAll).toHaveBeenCalled();
  expect(mockResponse.json).toHaveBeenCalledWith({
    teachers: { data: 'mockResults' },
  });
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await teachersController(mockService).findOne(mockRequest, mockResponse);
  expect(mockService.findOne).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    teacher: { data: 'mockResults' },
  });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  await teachersController(mockService).create(mockRequest, mockResponse);
  expect(mockService.create).toHaveBeenCalledWith(body, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'created',
    teacher: { data: 'mockResults' },
  });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  await teachersController(mockService).update(mockRequest, mockResponse);
  expect(mockService.update).toHaveBeenCalledWith(body, id, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'updated',
    teacher: { data: 'mockResults' },
  });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await teachersController(mockService).delete(mockRequest, mockResponse);
  expect(mockService.delete).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'deleted',
    teacher: { data: 'mockResults' },
  });
});
