import { mockArgs, mockRepository } from '../../jest/mocks';
import usersService from './users.service';

afterEach(() => jest.clearAllMocks());
test('it should create one', () => {
  const { body } = mockArgs;
  return usersService(mockRepository)
    .create(body)
    .then((data) => {
      expect(mockRepository.create).toHaveBeenCalledWith(body);
      expect(data).toBe(2);
    });
});
