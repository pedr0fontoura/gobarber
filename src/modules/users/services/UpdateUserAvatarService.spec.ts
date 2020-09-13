import AppError from '@shared/errors/AppError';

import FakeStorageProvider from '@shared/container/providers/StorageProvider/fakes/FakeStorageProvider';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import UpdateUserAvatarService from './UpdateUserAvatarService';

let fakeUsersRepository: FakeUsersRepository;
let fakeStorageProvider: FakeStorageProvider;
let updateUserAvatarService: UpdateUserAvatarService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeStorageProvider = new FakeStorageProvider();

    updateUserAvatarService = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeStorageProvider,
    );
  });

  it('should be able to update avatar', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    const updatedUser = await updateUserAvatarService.execute({
      userId: user.id,
      avatarFilename: 'avatar.png',
    });

    expect(updatedUser.avatar).toBe('avatar.png');
  });

  it('should be not able to update avatar from a non existent user', async () => {
    await expect(
      updateUserAvatarService.execute({
        userId: 'nonExistentUser',
        avatarFilename: 'avatar.png',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should delete the old one when updating avatar', async () => {
    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456',
    });

    await updateUserAvatarService.execute({
      userId: user.id,
      avatarFilename: 'oldAvatar.png',
    });

    await updateUserAvatarService.execute({
      userId: user.id,
      avatarFilename: 'newAvatar.png',
    });

    expect(deleteFile).toHaveBeenCalledWith('oldAvatar.png');
    expect(user.avatar).toBe('newAvatar.png');
  });
});
