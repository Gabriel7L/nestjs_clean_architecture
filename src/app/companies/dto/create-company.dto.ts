import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({
    example: '53.734.753/0001-97',
  })
  document: string;
  @ApiProperty({
    example: 'Sociedade Empresária LTDA',
  })
  social_name: string;
  @ApiProperty({
    example: 'Sociedade Empresária',
  })
  fantasy_name: string;
}
