import { EmployeesInput } from '@application/employees/employees-input';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import { IsValidDateOrStringDate } from '@domain/utils/validations/date-validation';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
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

  @IsValidDateOrStringDate('dt_hiring', { message: 'Birth date is invalid' })
  @IsOptional()
  dt_hiring: Date;

  @IsNumber()
  @IsNotEmpty()
  real_wage: number;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(2[0-3]|1[0-9]|0[1-9]):([0-5][0-9]):([0-5][0-9])$/, {
    message:
      'Carga horária inválida, o formato deve ser HH:MM:SS e valor máximo de 23:59:59',
  })
  workload: string;

  @IsNumber()
  @IsNotEmpty()
  fiscal_wage: number;

  constructor(data: EmployeesInput) {
    Object.assign(this, data);
  }
}

export class EmployeesValidator extends ClassValidatorFields<EmployeesRules> {
  Validate(data: EmployeesInput): boolean {
    return super.validate(new EmployeesRules(data));
  }
}
export default class EmployeesValidatorFactory {
  static Create() {
    return new EmployeesValidator();
  }
}
