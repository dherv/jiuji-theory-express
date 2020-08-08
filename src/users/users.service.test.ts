import { mockArgs, mockRepository } from '../../jest/mocks';
import usersService from './users.service';

afterEach(() => jest.clearAllMocks());

test('findAll() should return all users', () => {
  return usersService(mockRepository)
    .findAll()
    .then((data) => {
      expect(mockRepository.findAll).toHaveBeenCalled();
      expect(data).toEqual([{ data: 'mockRepository' }]);
    });
});

test('findOne() should return one user', () => {
  return usersService(mockRepository)
    .findOne(mockArgs.id)
    .then((data) => {
      expect(mockRepository.findOne).toHaveBeenCalled();
      expect(data).toEqual({ data: 'mockRepository' });
    });
});

test('create() should create one', () => {
  const { body } = mockArgs;
  return usersService(mockRepository)
    .create(body)
    .then((data) => {
      expect(mockRepository.create).toHaveBeenCalledWith(body);
      expect(data).toEqual({ data: 'mockRepository' });
    });
});

test('update() should update one', () => {
  const { body, id } = mockArgs;
  return usersService(mockRepository)
    .update(body, id)
    .then((data) => {
      expect(mockRepository.update).toHaveBeenCalledWith(body, id);
      expect(data).toEqual({ data: 'mockRepository' });
    });
});
