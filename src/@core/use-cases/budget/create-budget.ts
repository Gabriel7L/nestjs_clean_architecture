import { IBudgetRepository } from 'src/@core/domain/budget/ibudget.repository';
import { IPeopleRepository } from 'src/@core/domain/people/ipeople.repository';

export default class CreateBudget {
  budgetRepo: IBudgetRepository;
  peopleRepo: IPeopleRepository;
  constructor(budgetRepo: IBudgetRepository, peopleRepo: IPeopleRepository) {
    this.budgetRepo = budgetRepo;
    this.peopleRepo = peopleRepo;
  }
  async create(value: number, id_client: string, description: string) {
    if (!(await this.peopleRepo.getPersonById(id_client))) {
      throw new Error('Person does not exist');
    }
    const budget = await this.budgetRepo.saveBudget(
      value,
      id_client,
      description,
    );
    return budget;
  }
}
