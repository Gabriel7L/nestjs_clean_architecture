import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ValidateDocument } from '@domain/utils/validations/document-validations';
import { PeopleInput } from 'src/@core/application/people/people-input';

export class PeopleRules {
  @MaxLength(60)
  @IsOptional()
  @ValidateDocument('document', { message: 'Document is invalid' })
  document: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(2)
  @IsString()
  @IsNotEmpty()
  person_type: string;

  @IsBoolean()
  is_supplier: boolean;

  @IsDateString()
  @IsNotEmpty()
  dt_birth: Date;

  constructor(data: PeopleInput) {
    Object.assign(this, data);
  }
}
export class PeopleValidator extends ClassValidatorFields<PeopleRules> {
  validate(data: PeopleInput): boolean {
    return super.validate(new PeopleRules(data));
  }
}
export default class PeopleValidatorFactory {
  static create() {
    return new PeopleValidator();
  }
}
