import { mockRequest, mockResponse, mockService } from '../../jest/mocks';
import submissionsController from './submissions.controller';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  await submissionsController(mockService).findAll(mockRequest, mockResponse);
  expect(mockService.findAll).toHaveBeenCalled();
  expect(mockResponse.json).toHaveBeenCalledWith({
    submissions: { data: 'mockResults' },
  });
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await submissionsController(mockService).findOne(mockRequest, mockResponse);
  expect(mockService.findOne).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    submission: { data: 'mockResults' },
  });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  await submissionsController(mockService).create(mockRequest, mockResponse);
  expect(mockService.create).toHaveBeenCalledWith(body, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'created',
    submission: { data: 'mockResults' },
  });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  await submissionsController(mockService).update(mockRequest, mockResponse);
  expect(mockService.update).toHaveBeenCalledWith(body, id, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'updated',
    submission: { data: 'mockResults' },
  });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await submissionsController(mockService).delete(mockRequest, mockResponse);
  expect(mockService.delete).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'deleted',
    submission: { data: 'mockResults' },
  });
});
