import {
  MaxLength,
  IsString,
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  IsNumber,
} from 'class-validator';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import { UsersInput } from 'src/@core/application/users/users-input';

export class UsersRules {
  @MaxLength(255)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @MaxLength(200)
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minSymbols: 0,
    minUppercase: 0,
    minNumbers: 0,
  })
  password: string;
  @IsNumber()
  @IsNotEmpty()
  id_person: number;
  @IsNumber()
  @IsNotEmpty()
  id_company: number;

  constructor(data: UsersInput) {
    Object.assign(this, data);
  }
}

export class UsersValidator extends ClassValidatorFields<UsersRules> {
  Validate(data: UsersInput): boolean {
    return super.validate(new UsersRules(data));
  }
}

export default class UsersValidatorFactory {
  static Create() {
    return new UsersValidator();
  }
}
