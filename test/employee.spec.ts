import Employees from '@domain/employees/employees';

test('Deve criar um funcionario', () => {
  const input = {
    id_person: 1,
    position: 'Supervisor',
    dt_hiring: new Date('2023-05-02'),
    real_wage: 1535.4,
    workload: '08:00:00',
    fiscal_wage: 1325.6,
  };
  const employee = Employees.Create(input);

  expect(employee.dt_hiring.toISOString()).toBe(
    new Date('2023-05-02').toISOString(),
  );
});
