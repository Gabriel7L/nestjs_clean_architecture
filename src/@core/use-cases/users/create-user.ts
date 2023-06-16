import { IUsersRepository } from '@domain/users/iusers.repository';
import Users from '@domain/users/users';
import { UsersInput } from 'src/@core/application/users/users-input';

export default class CreateUser {
  constructor(private usersRepo: IUsersRepository) {}
  async createUser(props: UsersInput) {
    const data = Users.Create(props);
    const user = await this.usersRepo.Create(data);
    return user;
  }
}
