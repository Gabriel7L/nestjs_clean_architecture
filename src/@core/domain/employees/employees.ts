import { Basic } from '@domain/basic/basic';
import { EmployeesInput } from 'src/@core/application/employees/employees-input';
import EmployeesValidatorFactory from './validators/employees.validator';
import { HttpException } from '@nestjs/common';
import People from '@domain/people/people';
import Dependents from './dependents';
import { DependentsInput } from '@application/employees/dependents-input';

export default class Employees extends Basic {
  id_person: number;
  position: string;
  dt_hiring: Date;
  real_wage: number;
  workload: string;
  fiscal_wage: number;
  person: People;
  dependets: Dependents[];
  constructor(props: EmployeesInput, id?: number) {
    super();
    if (!props) {
      return;
    }
    Employees.Validate(props);
    Object.assign(this, props);
    this.dependets = [];
    this.id = id;
  }
  static Create(props: EmployeesInput, id?: number) {
    return new Employees(props, id);
  }

  AddDependt(props: DependentsInput, id?: number) {
    const dependent = Dependents.Create(props, id);
    this.dependets.push(dependent);
  }

  static Validate(props: EmployeesInput) {
    const validator = EmployeesValidatorFactory.Create();
    validator.Validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
