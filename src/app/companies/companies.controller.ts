import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/login/jwt.guard';

@ApiTags('Companies')
@UseGuards(JwtGuard)
@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}

  @Post()
  Create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companiesService.Create(createCompanyDto);
  }

  @Get()
  FindAll() {
    return this.companiesService.FindAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.companiesService.FindOne(+id);
  }

  @Patch(':id')
  Update(@Param('id') id: string, @Body() updateCompanyDto: CreateCompanyDto) {
    return this.companiesService.Update(+id, updateCompanyDto);
  }

  @Delete(':id')
  Remove(@Param('id') id: string) {
    return this.companiesService.Remove(+id);
  }
}
