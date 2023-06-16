import Addresses from 'src/@core/domain/addresses/addresses';

export interface IAddressesRepository {
  SaveAddresses(addresses: Addresses[]): Promise<Addresses[]>;
  GetAddressesByIdPerson(personId: number): Promise<Addresses[]>;
}
