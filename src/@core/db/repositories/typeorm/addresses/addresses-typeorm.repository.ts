import Addresses from 'src/@core/domain/addresses/addresses';
import { IAddressesRepository } from 'src/@core/domain/addresses/iaddresses.repository';
import { Repository } from 'typeorm';

export class AddressesTypeOrmRepository implements IAddressesRepository {
  constructor(private addressRepo: Repository<Addresses>) {}
  async SaveAddresses(addresses: Addresses[]): Promise<Addresses[]> {
    return await this.addressRepo.save(addresses);
  }
  async GetAddressesByIdPerson(personId: number): Promise<Addresses[]> {
    return await this.addressRepo.find({
      where: {
        id_person: personId,
      },
    });
  }
}
