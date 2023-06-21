import Addresses from 'src/@core/domain/addresses/addresses';
import { IAddressesRepository } from 'src/@core/domain/addresses/iaddresses.repository';

export default class AddressesInMemoryRepository
  implements IAddressesRepository
{
  items: Addresses[] = [];
  async SaveAddresses(addresses: Addresses[]): Promise<Addresses[]> {
    addresses.forEach((address) => {
      this.items.push(address);
    });
    return Promise.resolve(this.items);
  }
  async GetAddressesByIdPerson(personId: number): Promise<Addresses[]> {
    return Promise.resolve(
      this.items.filter((address) => address.id_person === personId),
    );
  }
  async Delete(id: number): Promise<void> {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
