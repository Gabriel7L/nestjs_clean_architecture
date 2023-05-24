import { ValidateDocument } from '@domain/utils/validations/document-validations';
import { MaxLength, IsString, IsNotEmpty, IsOptional } from 'class-validator';
import Companies from './companies';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';

export class CompaniesRules {
  @MaxLength(60)
  @IsString()
  @IsNotEmpty()
  @ValidateDocument('document', { message: 'Document is invalid' })
  document: string;
  @IsOptional()
  @MaxLength(255)
  @IsString()
  social_name: string;
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  fantasy_name: string;

  constructor(data: Omit<Companies, 'id' | 'created_at' | 'updated_at'>) {
    Object.assign(this, data);
  }
}
export class CompaniesValidator extends ClassValidatorFields<CompaniesRules> {
  validate(data: Omit<Companies, 'id' | 'created_at' | 'updated_at'>) {
    return super.validate(new CompaniesRules(data));
  }
}
export default class CompaniesValidatorFactory {
  static create() {
    return new CompaniesValidator();
  }
}