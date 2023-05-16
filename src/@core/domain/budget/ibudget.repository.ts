import Budget from 'src/@core/domain/budget/budget';

export interface IBudgetRepository {
  saveBudget(
    value: number,
    id_client: number,
    description: string,
  ): Promise<Budget>;
  getById(id: number): Promise<Budget>;
}
