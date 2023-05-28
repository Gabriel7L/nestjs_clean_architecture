import { states } from '@domain/utils/convertions/convert-states';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPostalCode,
  IsString,
  MaxLength,
} from 'class-validator';
import { ClassValidatorFields } from '@domain/utils/validations/class-validator-fields';
import { AddressesInput } from 'src/@core/application/addresses/addresses-input';

export class AddressesRules {
  @IsString()
  @MaxLength(255)
  @IsNotEmpty()
  street: string;
  @IsString()
  @MaxLength(80)
  number: string;
  @IsString()
  @MaxLength(255)
  @IsOptional()
  complement: string;
  @IsString()
  @IsPostalCode('BR')
  zip_code: string;
  @IsEnum(states, { message: 'state is invalid' })
  @IsNotEmpty()
  state: states;
  @IsOptional()
  @IsString()
  @MaxLength(100)
  district: string;
  @IsString()
  @MaxLength(100)
  @IsNotEmpty()
  city: string;
  constructor(data: AddressesInput) {
    Object.assign(this, data);
  }
}
export class AddressesValidator extends ClassValidatorFields<AddressesRules> {
  validate(data: AddressesInput): boolean {
    return super.validate(new AddressesRules(data));
  }
}
export default class AddressesValidatorFactory {
  static create() {
    return new AddressesValidator();
  }
}
