import { IUsersRepository } from '@domain/users/iusers.repository';

export default class GetByEmailUser {
  constructor(private userRepo: IUsersRepository) {}
  async getByEmail(email: string) {
    const user = await this.userRepo.getByEmail(email);
    return user;
  }
}
