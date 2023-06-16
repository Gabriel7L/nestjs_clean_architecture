export interface IRepository<T> {
  Create(item: T): Promise<T>;
  Update(item: T): Promise<T>;
  GetById(id: number): Promise<T>;
  GetAll(
    page: number,
    recordsPerPage: number,
    id_company?: number,
  ): Promise<{ total: number; data: T[] }>;
}
