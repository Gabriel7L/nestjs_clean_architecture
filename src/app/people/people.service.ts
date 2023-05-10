import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import CreatePerson from 'src/@core/use-cases/people/create-person';
import GetPerson from 'src/@core/use-cases/people/get-person-by-id';
import GetPeople from 'src/@core/use-cases/people/get-people';

@Injectable()
export class PeopleService {
  constructor(
    private createPerson: CreatePerson,
    private getPerson: GetPerson,
    private getPeople: GetPeople,
  ) {}
  create(createPersonDto: CreatePersonDto) {
    return this.createPerson.createPerson(createPersonDto);
  }

  async findAll() {
    return await this.getPeople.getPeople();
  }

  findOne(id: string) {
    return this.getPerson.getPersonById(id);
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a ${id} ${updatePersonDto.document} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}