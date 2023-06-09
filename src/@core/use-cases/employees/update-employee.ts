import { EmployeesInput } from '@application/employees/employees-input';
import Employees from '@domain/employees/employees';
import IEmployeesRepository from '@domain/employees/repositories/iemployees.repository';
import { HttpException } from '@nestjs/common';

export default class UpdateEmployee {
  constructor(private employeesRepo: IEmployeesRepository) {}
  async updateEmployee(props: EmployeesInput, id: number) {
    if (!(await this.employeesRepo.getById(id)))
      throw new HttpException('Employee not found', 404);
    const data = Employees.Create(props, id);
    return await this.employeesRepo.update(data);
  }
}
