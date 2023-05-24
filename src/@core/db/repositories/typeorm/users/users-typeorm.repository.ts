import { IUsersRepository } from '@domain/users/iusers.repository';
import Users from '@domain/users/users';
import { HttpException } from '@nestjs/common';
import { Repository } from 'typeorm';

export class UsersTypeOrmRepository implements IUsersRepository {
  constructor(private userRepo: Repository<Users>) {}
  async create(item: Users): Promise<Users> {
    const data = this.userRepo.create(item);
    return await this.userRepo.save(data);
  }
  update(item: Users): Promise<Users> {
    throw new Error('Method not implemented.');
  }
  async getById(id: number): Promise<Users> {
    const user = await this.userRepo.findOne({
      where: {
        id,
      },
    });
    if (user) return user;
    throw new HttpException('User not found', 404);
  }
  async getAll(
    page: number,
    recordsPerPage: number,
  ): Promise<{ total: number; data: Users[] }> {
    const data = await this.userRepo.find({
      skip: page,
      take: recordsPerPage,
    });
    const count = await this.userRepo.count();
    const total = Math.ceil(count / recordsPerPage);
    return { data, total };
  }
}
