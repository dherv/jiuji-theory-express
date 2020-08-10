import { mockRepository, mockRequest } from '../../jest/mocks';
import guardsService from './guards.service';

test('findAll() should return all', async () => {
  const data = await guardsService(mockRepository).findAll();
  expect(mockRepository.findAll).toHaveBeenCalled();
  expect(data).toEqual([{ data: 'mockRepository' }]);
});
test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  const data = await guardsService(mockRepository).findOne(id);
  expect(mockRepository.findOne).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});
test('create() should create one', async () => {
  const { body, user } = mockRequest;
  const data = await guardsService(mockRepository).create(body, user);
  expect(mockRepository.create).toHaveBeenCalled();
  expect(data).toEqual({ data: 'mockRepository' });
});
test('update() should update one', async () => {
  const {
    body,
    params: { id },
    user,
  } = mockRequest;
  const data = await guardsService(mockRepository).update(body, id, user);
  expect(mockRepository.update).toHaveBeenCalledWith(body, id, user);
  expect(data).toEqual({ data: 'mockRepository' });
});
test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  const data = await guardsService(mockRepository).delete(id);
  expect(mockRepository.delete).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});
