import Budget from 'src/@core/domain/budget/budget';
import crypto from 'crypto';
import { IBudgetRepository } from 'src/@core/domain/budget/ibudget.repository';

export default class BudgetInMemoryRepository implements IBudgetRepository {
  items: Budget[] = [];
  async saveBudget(
    value: number,
    id_client: number,
    description: string,
  ): Promise<Budget> {
    const budget = {
      value,
      description,
      id_client,
      id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.items.push(budget);
    return Promise.resolve(budget);
  }
  async getById(id: number): Promise<Budget> {
    return Promise.resolve(this.items.find((item) => item.id === id));
  }
}
