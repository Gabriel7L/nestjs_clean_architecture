import { states } from '@domain/utils/convertions/convert-states';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
class AddressesInput {
  @ApiProperty({
    example: 'Rua das Flores',
  })
  street: string;
  @ApiProperty({
    example: 'Sala 1',
  })
  complement: string;
  @ApiProperty({
    example: '123',
  })
  number: string;
  @ApiProperty({
    example: '12345-678',
  })
  zip_code: string;
  @ApiProperty({
    example: 'Centro',
  })
  district: string;
  @ApiProperty({
    example: 'RJ',
  })
  state: states;
  @ApiProperty({
    example: 'Rio de Janeiro',
  })
  city: string;
}
class EmailsInput {
  @ApiProperty({
    example: 'pessoa@dreamsystem.com.br',
  })
  email: string;
}
export class CreatePersonDto {
  @ApiProperty({
    example: 'João da Silva',
  })
  name: string;
  @ApiProperty({
    example: '157.557.450-05',
  })
  document: string;
  @ApiProperty({
    example: '1985-05-05',
  })
  dt_birth: Date;
  @ApiProperty({ type: [AddressesInput] })
  @IsArray()
  addresses: AddressesInput[];
  @ApiProperty({ type: [EmailsInput] })
  @IsArray()
  emails: EmailsInput[];
}
