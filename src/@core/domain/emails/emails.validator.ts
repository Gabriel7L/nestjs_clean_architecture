import { IsEmail, IsOptional, IsString } from 'class-validator';
import Emails from './emails';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';

export class EmailsRules {
  @IsOptional()
  @IsEmail()
  email: string;
  constructor(
    data: Omit<
      Emails,
      'id' | 'id_person' | 'created_at' | 'updated_at' | 'person'
    >,
  ) {
    Object.assign(this, data);
  }
}

export class EmailsValidator extends ClassValidatorFields<EmailsRules> {
  validate(
    data: Omit<
      Emails,
      'id' | 'id_person' | 'created_at' | 'updated_at' | 'person'
    >,
  ): boolean {
    return super.validate(new EmailsRules(data));
  }
}
export default class EmailsValidatorFactory {
  static create() {
    return new EmailsValidator();
  }
}
