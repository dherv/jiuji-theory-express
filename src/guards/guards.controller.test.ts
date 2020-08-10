import { mockRequest, mockResponse, mockService } from '../../jest/mocks';
import guardsController from './guards.controller';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  await guardsController(mockService).findAll(mockRequest, mockResponse);
  expect(mockService.findAll).toHaveBeenCalled();
  expect(mockResponse.json).toHaveBeenCalledWith({
    guards: { data: 'mockResults' },
  });
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await guardsController(mockService).findOne(mockRequest, mockResponse);
  expect(mockService.findOne).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    guard: { data: 'mockResults' },
  });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  await guardsController(mockService).create(mockRequest, mockResponse);
  expect(mockService.create).toHaveBeenCalledWith(body, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'created',
    guard: { data: 'mockResults' },
  });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  await guardsController(mockService).update(mockRequest, mockResponse);
  expect(mockService.update).toHaveBeenCalledWith(body, id, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'updated',
    guard: { data: 'mockResults' },
  });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await guardsController(mockService).delete(mockRequest, mockResponse);
  expect(mockService.delete).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'deleted',
    guard: { data: 'mockResults' },
  });
});
