import CreateBudget from '../src/@core/use-cases/budget/create-budget';
import BudgetInMemoryRepository from '../src/@core/db/repositories/in-memory/budget/budget-in-memory.repository';
import GetBudget from '../src/@core/use-cases/budget/get-budget-';

test('Should be able to create a budget', async function () {
  const budgetRepo = new BudgetInMemoryRepository();
  const createBudget = new CreateBudget(budgetRepo);
  const budget = await createBudget.create(10, 1, 'Serviço de marmoraria');
  expect(budget.description).toBe('Serviço de marmoraria');
  expect(budget.id).not.toBeNull();
});

test('Should be ablet to get a created budget by unique identifier', async function () {
  const budgetRepo = new BudgetInMemoryRepository();
  const createBudget = new CreateBudget(budgetRepo);
  const budgetData = await createBudget.create(10, 1, 'Serviço de marmoraria');
  const getBudget = new GetBudget(budgetRepo);
  const budget = await getBudget.getBudgetById(budgetData.id);
  expect(budget.description).toBe(budgetData.description);
  expect(budget.id).toBe(budgetData.id);
  expect(budget.id_client).toBe(budgetData.id_client);
  expect(budget.value).toBe(budgetData.value);
});
