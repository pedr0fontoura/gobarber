import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

import User from '../infra/typeorm/entities/User';

interface IUsersRepository {
  findById(id: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
  create(data: ICreateUserDTO): Promise<User>;
  save(data: User): Promise<User>;
}

export default IUsersRepository;
