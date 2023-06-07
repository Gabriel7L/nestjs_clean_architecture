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
  constructor(props: EmployeesInput) {
    super();
    if (!props) {
      return;
    }
    Employees.Validate(props);
    Object.assign(this, props);
  }
  static Create(props: EmployeesInput) {
    return new Employees(props);
  }

  static Validate(props: EmployeesInput) {
    const validator = EmployeesValidatorFactory.create();
    validator.validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
