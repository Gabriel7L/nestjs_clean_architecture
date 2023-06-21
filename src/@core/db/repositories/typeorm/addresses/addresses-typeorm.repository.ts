import Addresses from 'src/@core/domain/addresses/addresses';
import { IAddressesRepository } from 'src/@core/domain/addresses/iaddresses.repository';
import { Repository } from 'typeorm';

export class AddressesTypeOrmRepository implements IAddressesRepository {
  constructor(private addressRepo: Repository<Addresses>) {}
  async Delete(id: number): Promise<void> {
    await this.addressRepo.delete(id);
  }
}
