import Addresses from 'src/@core/domain/addresses/addresses';

export interface IAddressesRepository {
  saveAddresses(addresses: Addresses[]): Promise<Addresses[]>;
  getAddressesByIdPerson(personId: string): Promise<Addresses[]>;
}
