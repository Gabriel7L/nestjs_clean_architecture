import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  Create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.Create(createEmployeeDto);
  }

  @Get()
  FindAll() {
    return this.employeesService.FindAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.employeesService.FindOne(+id);
  }

  @Put(':id')
  Update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeesService.Update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  Remove(@Param('id') id: string) {
    return this.employeesService.Remove(+id);
  }
}
