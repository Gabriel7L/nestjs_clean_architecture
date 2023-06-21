import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
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
  Create(createPersonDto: CreatePersonDto, id_company: number) {
    return this.createPerson.CreatePerson(
      createPersonDto,
      createPersonDto.addresses,
      createPersonDto.emails,
      id_company,
    );
  }

  async FindAll(page: number, recordsPerPage: number, id_company: number) {
    return await this.getPeople.GetPeople(page, recordsPerPage, id_company);
  }

  FindOne(id: number) {
    return this.getPerson.GetPersonById(id);
  }
  async FindByDocument(document: string, id_company: number) {
    return await this.getPersonByDocument.GetPersonByDocument(
      document,
      id_company,
    );
  }
  Update(id: number, updatePersonDto: CreatePersonDto) {
    return `This action updates a ${id} person`;
  }

  Remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
