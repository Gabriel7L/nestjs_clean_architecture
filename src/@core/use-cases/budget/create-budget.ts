import { IBudgetRepository } from 'src/@core/domain/budget/ibudget.repository';

export default class CreateBudget {
  constructor(private budgetRepo: IBudgetRepository) {}
  async create(value: number, id_client: number, description: string) {
    const budget = await this.budgetRepo.saveBudget(
      value,
      id_client,
      description,
    );
    return budget;
  }
}
