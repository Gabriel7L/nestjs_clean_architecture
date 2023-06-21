import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { PeopleService } from './people.service';
import { ApiTags } from '@nestjs/swagger';
import { JwtGuard } from '../auth/login/jwt.guard';

@ApiTags('People')
@UseGuards(JwtGuard)
@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto, @Request() req) {
    return this.peopleService.Create(
      createPersonDto,
      parseInt(req.user.company),
    );
  }

  @Get()
  findAll(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Request() req,
  ) {
    return this.peopleService.FindAll(page, limit, parseInt(req.user.company));
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.peopleService.FindOne(id);
  }
  @Get('/bydocument/:document')
  findByDocument(@Param('document') document: string, @Request() req) {
    return this.peopleService.FindByDocument(
      document,
      parseInt(req.user.company),
    );
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: CreatePersonDto) {
    return this.peopleService.Update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.peopleService.Remove(+id);
  }
}
