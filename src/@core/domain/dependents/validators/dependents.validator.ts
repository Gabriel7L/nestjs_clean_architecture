import { DependentsInput } from '@application/dependents/dependents-input';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DependentsRules {
  @IsNumber()
  id_dependency: number;
  @IsNumber()
  id_person: number;
  @IsString()
  @IsNotEmpty()
  relationship: string;
  constructor(data: DependentsInput) {
    Object.assign(this, data);
  }
}

export class DependentsValidator extends ClassValidatorFields<DependentsRules> {
  Validate(data: DependentsInput): boolean {
    return super.validate(new DependentsRules(data));
  }
}

export default class DependentsValidatorFactory {
  static Create() {
    return new DependentsValidator();
  }
}
