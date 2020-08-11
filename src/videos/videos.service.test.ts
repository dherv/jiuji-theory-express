import { mockRepository, mockRequest } from '../../jest/mocks';
import videosService from './videos.service';

test('findAll() should return all', async () => {
  const data = await videosService(mockRepository).findAll();
  expect(mockRepository.findAll).toHaveBeenCalled();
  expect(data).toEqual([{ data: 'mockRepository' }]);
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  const data = await videosService(mockRepository).findOne(id);
  expect(mockRepository.findOne).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  const data = await videosService(mockRepository).create(body, user);
  expect(mockRepository.create).toHaveBeenCalled();
  expect(data).toEqual({ data: 'mockRepository' });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  const data = await videosService(mockRepository).update(body, id, user);
  expect(mockRepository.update).toHaveBeenCalledWith(body, id, user);
  expect(data).toEqual({ data: 'mockRepository' });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  const data = await videosService(mockRepository).delete(id);
  expect(mockRepository.delete).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});
test.skip('search() should search for youtube videos and return videos up to maxResults', async () => {});
