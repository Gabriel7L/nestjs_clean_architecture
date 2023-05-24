import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import People from './people';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ValidateDocument } from '@domain/utils/validations/document-validations';

export class PeopleRules {
  @MaxLength(60)
  @IsString()
  @IsNotEmpty()
  @ValidateDocument('document', { message: 'Document is invalid' })
  document: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  constructor(
    data: Omit<
      People,
      'id' | 'created_at' | 'updated_at' | 'addresses' | 'emails'
    >,
  ) {
    Object.assign(this, data);
  }
}
export class PeopleValidator extends ClassValidatorFields<PeopleRules> {
  validate(
    data: Omit<
      People,
      'id' | 'created_at' | 'updated_at' | 'addresses' | 'emails'
    >,
  ): boolean {
    return super.validate(new PeopleRules(data));
  }
}
export default class PeopleValidatorFactory {
  static create() {
    return new PeopleValidator();
  }
}
