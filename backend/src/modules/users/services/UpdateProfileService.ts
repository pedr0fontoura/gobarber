import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '@modules/users/infra/typeorm/entities/User';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IHashProvider from '@modules/users/providers/HashProvider/models/IHashProvider';

interface Request {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashProvider')
    private hashProvider: IHashProvider,
  ) {}

  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: Request): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    if (email !== user.email) {
      const emailUnavailable = await this.usersRepository.findByEmail(email);

      if (emailUnavailable) {
        throw new AppError('This email is not available.');
      }
    }

    Object.assign(user, { name, email });

    if (password) {
      if (!old_password) {
        throw new AppError(
          'To updated the password you need to inform the old one',
        );
      }

      if (!(await this.hashProvider.compareHash(old_password, user.password))) {
        throw new AppError('Incorrect old password.');
      }

      user.password = await this.hashProvider.generateHash(password);
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileService;
