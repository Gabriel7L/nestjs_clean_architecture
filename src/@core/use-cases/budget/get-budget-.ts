import Budget from 'src/@core/domain/budget/budget';
import { IBudgetRepository } from 'src/@core/domain/budget/ibudget.repository';

export default class GetBudget {
  budgetRepo: IBudgetRepository;
  constructor(budgetRepo: IBudgetRepository) {
    this.budgetRepo = budgetRepo;
  }
  async getBudgetById(id: string): Promise<Budget> {
    return await this.budgetRepo.getById(id);
  }
}
