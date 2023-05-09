import Budget from 'src/@core/domain/budget/budget';

export interface IBudgetRepository {
  saveBudget(
    value: number,
    id_client: string,
    description: string,
  ): Promise<Budget>;
  getById(id: string): Promise<Budget>;
}
