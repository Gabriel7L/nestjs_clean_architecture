import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'usuario@mgcode.com.br',
  })
  email: string;
  @ApiProperty({
    example: '#DreamSystem!',
  })
  password: string;
  @ApiProperty({
    example: 1,
  })
  id_person: number;
  @ApiProperty({
    example: 4,
  })
  id_companie: number;
}
