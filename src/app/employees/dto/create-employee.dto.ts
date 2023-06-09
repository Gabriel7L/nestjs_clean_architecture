import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({
    example: 1,
  })
  id_person: number;
  @ApiProperty({
    example: 'Colaborador',
  })
  position: string;
  @ApiProperty({
    example: '2020-05-05',
  })
  dt_hiring: Date;
  @ApiProperty({
    example: 1454.25,
  })
  real_wage: number;
  @ApiProperty({
    example: '08:00:00',
  })
  workload: string;
  @ApiProperty({
    example: 1390.25,
  })
  fiscal_wage: number;
}
