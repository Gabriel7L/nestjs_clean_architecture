import Addresses from 'src/@core/domain/addresses/addresses';

export interface IAddressesRepository {
  Delete(id: number): Promise<void>;
}
