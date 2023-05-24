import { IUsersRepository } from '@domain/users/iusers.repository';
import Users from '@domain/users/users';

export default class CreateUser {
  constructor(private companiesRepo: IUsersRepository) {}
  async createUser(
    props: Omit<
      Users,
      'id' | 'person' | 'companie' | 'updated_at' | 'created_at'
    >,
  ) {
    const data = Users.Create(props);
    const company = await this.companiesRepo.create(data);
    return company;
  }
}
