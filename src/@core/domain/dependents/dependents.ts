import { DependentsInput } from '@application/dependents/dependents-input';
import { Basic } from '@domain/basic/basic';
import DependentsValidatorFactory from './validators/dependents.validator';
import { HttpException } from '@nestjs/common';

export default class Dependents extends Basic {
  id_employee: number;
  id_dependency: number;
  id_person: number;
  relationship: string;

  private constructor(
    props: DependentsInput,
    id_employee?: number,
    id?: number,
  ) {
    super();
    if (!props) return;
    Dependents.Validate(props);
    Object.assign(this, props);
    this.id_employee = id_employee;
    this.id = id;
  }

  static Create(props: DependentsInput, id_employee?: number, id?: number) {
    return new Dependents(props, id_employee, id);
  }
  static Validate(props: DependentsInput) {
    const validator = DependentsValidatorFactory.Create();
    validator.Validate(props);
    if (validator.errors) {
      throw new HttpException({ errors: validator.errors }, 400);
    }
  }
}
