import { EmployeesInput } from '@application/employees/employees-input';
import { PeopleValidator } from '@domain/people/validators/people.validator';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class EmployeesRules {
  @IsNumber()
  @IsNotEmpty()
  id_person: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  position: string;

  @IsOptional()
  @IsDateString()
  dt_hiring: Date;

  @IsNumber()
  @IsNotEmpty()
  real_wage: number;

  @IsString()
  @IsNotEmpty()
  workload: string;

  @IsNumber()
  @IsNotEmpty()
  fiscal_wage: number;

  constructor(data: EmployeesInput) {
    Object.assign(this, data);
  }
}

export class EmployeesValidator extends ClassValidatorFields<EmployeesRules> {
  validate(data: EmployeesInput): boolean {
    return super.validate(new EmployeesRules(data));
  }
}
export default class EmployeesValidatorFactory {
  static create() {
    return new EmployeesValidator();
  }
}
