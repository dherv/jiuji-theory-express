import {
  mockRepository as baseMockRepository,
  mockRequest,
} from '../../jest/mocks';
import usersService from './users.service';

const mockRepository = {
  ...baseMockRepository,
  findOneByEmailWithPassword: jest
    .fn()
    .mockImplementation(() => ({ data: 'mockRepository' })),
};

afterEach(() => jest.clearAllMocks());

test('findAll() should return all', async () => {
  const data = await usersService(mockRepository).findAll();
  expect(mockRepository.findAll).toHaveBeenCalled();
  expect(data).toEqual([{ data: 'mockRepository' }]);
});

test('findOne() should return one', async () => {
  const {
    params: { id },
  } = mockRequest;
  const data = await usersService(mockRepository).findOne(id);
  expect(mockRepository.findOne).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});

test('create() should create one', async () => {
  const { body } = mockRequest;
  const data = await usersService(mockRepository).create(body);
  expect(mockRepository.create).toHaveBeenCalledWith(body);
  expect(data).toEqual({ data: 'mockRepository' });
});

test('update() should update one', async () => {
  const {
    body,
    params: { id },
  } = mockRequest;
  const data = await usersService(mockRepository).update(body, id);
  expect(mockRepository.update).toHaveBeenCalledWith(body, id);
  expect(data).toEqual({ data: 'mockRepository' });
});

test('delete() should delete one', async () => {
  const {
    params: { id },
  } = mockRequest;
  const data = await usersService(mockRepository).delete(id);
  expect(mockRepository.delete).toHaveBeenCalledWith(id);
  expect(data).toEqual({ data: 'mockRepository' });
});
