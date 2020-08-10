import { mockRequest, mockResponse, mockService } from '../../jest/mocks';
import clubsController from './clubs.controller';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  await clubsController(mockService).findAll(mockRequest, mockResponse);
  expect(mockService.findAll).toHaveBeenCalled();
  expect(mockResponse.json).toHaveBeenCalledWith({
    clubs: { data: 'mockResults' },
  });
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await clubsController(mockService).findOne(mockRequest, mockResponse);
  expect(mockService.findOne).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    club: { data: 'mockResults' },
  });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  await clubsController(mockService).create(mockRequest, mockResponse);
  expect(mockService.create).toHaveBeenCalledWith(body, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'created',
    club: { data: 'mockResults' },
  });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  await clubsController(mockService).update(mockRequest, mockResponse);
  expect(mockService.update).toHaveBeenCalledWith(body, id, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'updated',
    club: { data: 'mockResults' },
  });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await clubsController(mockService).delete(mockRequest, mockResponse);
  expect(mockService.delete).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'deleted',
    club: { data: 'mockResults' },
  });
});
