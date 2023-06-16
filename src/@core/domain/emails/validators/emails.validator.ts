import { IsEmail, IsOptional } from 'class-validator';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import { EmailsInput } from 'src/@core/application/emails/emails-input';

export class EmailsRules {
  @IsOptional()
  @IsEmail()
  email: string;
  constructor(data: EmailsInput) {
    Object.assign(this, data);
  }
}

export class EmailsValidator extends ClassValidatorFields<EmailsRules> {
  Validate(data: EmailsInput): boolean {
    return super.validate(new EmailsRules(data));
  }
}
export default class EmailsValidatorFactory {
  static Create() {
    return new EmailsValidator();
  }
}
