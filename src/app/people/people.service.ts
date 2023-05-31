import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import CreatePerson from '@use-cases/people/create-person';
import GetPerson from '@use-cases/people/get-person-by-id';
import GetPeople from '@use-cases/people/get-people';
import GetPersonByDocument from '@use-cases/people/get-person-by-document';

@Injectable()
export class PeopleService {
  constructor(
    private createPerson: CreatePerson,
    private getPerson: GetPerson,
    private getPeople: GetPeople,
    private getPersonByDocument: GetPersonByDocument,
  ) {}
  create(createPersonDto: CreatePersonDto, id_company: number) {
    return this.createPerson.createPerson(
      createPersonDto,
      createPersonDto.addresses,
      createPersonDto.emails,
      id_company,
    );
  }

  async findAll(page: number, recordsPerPage: number, id_company: number) {
    return await this.getPeople.getPeople(page, recordsPerPage, id_company);
  }

  findOne(id: number) {
    return this.getPerson.getPersonById(id);
  }
  async findByDocument(document: string, id_company: number) {
    return await this.getPersonByDocument.getPersonByDocument(
      document,
      id_company,
    );
  }
  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a ${id} ${updatePersonDto.document} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
