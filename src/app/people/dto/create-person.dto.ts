import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { states } from 'src/@core/domain/addresses/addresses';
class AddressesInput {
  @ApiProperty()
  street: string;
  @ApiProperty()
  complement: string;
  @ApiProperty()
  number: string;
  @ApiProperty()
  zip_code: string;
  @ApiProperty()
  district: string;
  @ApiProperty()
  state: states;
  @ApiProperty()
  city: string;
}

export class CreatePersonDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  document: string;
  @ApiProperty()
  dt_birth: Date;
  @ApiProperty({ type: [AddressesInput] })
  @IsArray()
  addresses: AddressesInput[];
}
