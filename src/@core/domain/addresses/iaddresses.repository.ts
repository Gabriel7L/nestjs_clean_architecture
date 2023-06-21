export interface IAddressesRepository {
  Delete(id: number): Promise<void>;
}
