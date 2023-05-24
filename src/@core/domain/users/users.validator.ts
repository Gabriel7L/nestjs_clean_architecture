import {
  MaxLength,
  IsString,
  IsNotEmpty,
  IsEmail,
  IsStrongPassword,
  IsNumber,
} from 'class-validator';
import Users from './users';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';

export class UsersRules {
  @MaxLength(255)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @MaxLength(255)
  @IsStrongPassword({ minLength: 6 })
  password: string;
  @IsNumber()
  @IsNotEmpty()
  id_person: number;
  @IsNumber()
  @IsNotEmpty()
  id_companie: number;

  constructor(
    data: Omit<
      Users,
      'id' | 'created_at' | 'updated_at' | 'person' | 'companie'
    >,
  ) {
    Object.assign(this, data);
  }
}

export class UsersValidator extends ClassValidatorFields<UsersRules> {
  validate(
    data: Omit<
      Users,
      'id' | 'created_at' | 'updated_at' | 'person' | 'companie'
    >,
  ): boolean {
    return super.validate(new UsersRules(data));
  }
}

export default class UsersValidatorFactory {
  static create() {
    return new UsersValidator();
  }
}
