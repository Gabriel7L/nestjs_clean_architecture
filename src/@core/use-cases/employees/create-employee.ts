import { EmployeesInput } from '@application/employees/employees-input';
import Employees from '@domain/employees/employees';
import IEmployeesRepository from '@domain/employees/repositories/iemployees.repository';

export default class CreateEmployee {
  constructor(private employeesRepo: IEmployeesRepository) {}
  async CreateEmployee(props: EmployeesInput) {
    const data = Employees.Create(props);
    const employee = await this.employeesRepo.Create(data);
    return employee;
  }
}
