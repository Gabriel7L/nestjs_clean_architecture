import { Basic } from '@domain/basic/basic';
import { EmployeesInput } from 'src/@core/application/employees/employees-input';
import EmployeesValidatorFactory from './validators/employees.validator';
import { HttpException } from '@nestjs/common';

export default class Employees extends Basic {
  id_person: number;
  position: string;
  dt_hiring: Date;
  real_wage: number;
  workload: string;
  fiscal_wage: number;
  constructor(props: EmployeesInput, id?: number) {
    super();
    if (!props) {
      return;
    }
    Employees.Validate(props);
    Object.assign(this, props);
    this.id = id;
  }
  static Create(props: EmployeesInput, id?: number) {
    return new Employees(props, id);
  }

  static Validate(props: EmployeesInput) {
    const validator = EmployeesValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
