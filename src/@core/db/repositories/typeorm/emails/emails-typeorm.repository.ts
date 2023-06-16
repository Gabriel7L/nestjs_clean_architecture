import Emails from '@domain/emails/emails';
import { IEmailsRepository } from '@domain/emails/repositories/iemails.repository';
import { Repository } from 'typeorm';

export class EmailsTypeOrmRepository implements IEmailsRepository {
  constructor(private emailRepo: Repository<Emails>) {}

  create(email: Emails): Promise<Emails> {
    const data = this.emailRepo.create(email);
    return this.emailRepo.save(data);
  }
  update(item: Emails): Promise<Emails> {
    throw new Error('Method not implemented.');
  }
  getById(id: number): Promise<Emails> {
    throw new Error('Method not implemented.');
  }
  getAll(
    page: number,
    recordsPerPage: number,
  ): Promise<{ total: number; data: Emails[] }> {
    throw new Error('Method not implemented.');
  }
}
