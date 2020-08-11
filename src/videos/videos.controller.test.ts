import {
  mockRequest,
  mockResponse,
  mockResults,
  mockService as baseMockService,
} from '../../jest/mocks';
import videosController from './videos.controller';

const mockService = {
  ...baseMockService,
  search: jest.fn().mockImplementation(() => Promise.resolve(mockResults)),
};

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  await videosController(mockService).findAll(mockRequest, mockResponse);
  expect(mockService.findAll).toHaveBeenCalled();
  expect(mockResponse.json).toHaveBeenCalledWith({
    videos: { data: 'mockResults' },
  });
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await videosController(mockService).findOne(mockRequest, mockResponse);
  expect(mockService.findOne).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    video: { data: 'mockResults' },
  });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  await videosController(mockService).create(mockRequest, mockResponse);
  expect(mockService.create).toHaveBeenCalledWith(body, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'created',
    video: { data: 'mockResults' },
  });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  await videosController(mockService).update(mockRequest, mockResponse);
  expect(mockService.update).toHaveBeenCalledWith(body, id, user);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'updated',
    video: { data: 'mockResults' },
  });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  await videosController(mockService).delete(mockRequest, mockResponse);
  expect(mockService.delete).toHaveBeenCalledWith(id);
  expect(mockResponse.json).toHaveBeenCalledWith({
    message: 'deleted',
    video: { data: 'mockResults' },
  });
});
test('search() should search for youtube videos and return videos up to maxResults', async () => {
  const { body } = mockRequest;
  await videosController(mockService).search(mockRequest, mockResponse);
  expect(mockService.search).toHaveBeenCalledWith(body);
  expect(mockResponse.json).toHaveBeenCalledWith({
    videos: { data: 'mockResults' },
  });
});
