import { mockArgs, mockRepository } from '../../jest/mocks';
import usersService from './users.service';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  const data = await usersService(mockRepository).findAll();
  expect(mockRepository.findAll).toHaveBeenCalled();
  expect(data).toEqual([{ data: 'mockRepository' }]);
});

test('findOne() should return one', async () => {
  const data = await usersService(mockRepository).findOne(mockArgs.id);
  expect(mockRepository.findOne).toHaveBeenCalled();
  expect(data).toEqual({ data: 'mockRepository' });
});

test('create() should create one', async () => {
  const { body } = mockArgs;
  const data = await usersService(mockRepository).create(body);
  expect(mockRepository.create).toHaveBeenCalledWith(body);
  expect(data).toEqual({ data: 'mockRepository' });
});

test('update() should update one', async () => {
  const { body, id } = mockArgs;
  const data = await usersService(mockRepository).update(body, id);
  expect(mockRepository.update).toHaveBeenCalledWith(body, id);
  expect(data).toEqual({ data: 'mockRepository' });
});

test('delete() should delete one', async () => {
  const { id } = mockArgs;
  const data = await usersService(mockRepository).delete(id);
  expect(mockRepository.delete).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});
