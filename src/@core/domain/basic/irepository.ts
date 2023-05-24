export interface IRepository<T> {
  create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  getById(id: number): Promise<T>;
  getAll(
    page: number,
    recordsPerPage: number,
  ): Promise<{ total: number; data: T[] }>;
}
