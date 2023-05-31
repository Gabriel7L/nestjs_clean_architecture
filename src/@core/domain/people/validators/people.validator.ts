import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
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
