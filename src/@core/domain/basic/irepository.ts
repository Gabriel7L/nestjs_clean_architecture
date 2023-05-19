export interface IRepository<T> {
  create(item: T): Promise<T>;
  update(id: number, item: T): Promise<T>;
  getById(id: number): Promise<T>;
  getAll(
    page: number,
    recordsPerPage: number,
  ): Promise<{ total: number; data: T[] }>;
}
