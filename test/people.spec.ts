import { states } from '../src/@core/domain/utils/convertions/convert-states';
import PeopleInMemoryRepository from '../src/@core/db/repositories/in-memory/people/people-in-memory.repository';
import CreatePerson from '../src/@core/use-cases/people/create-person';

test('Should be able to create a person', async function () {
  const peopleRepo = new PeopleInMemoryRepository();
  const createPerson = new CreatePerson(peopleRepo);

  const address = {
    street: 'Rua Camilo Cristelli',
    city: 'Sete Lagoas',
    state: 'MG',
    complement: 'apto 902',
    number: '46',
    zip_code: '35700-070',
    district: 'Centro',
  };
  const person = await createPerson.createPerson(
    {
      document: '',
      name: 'Gabriel',
      dt_birth: new Date(),
    },
    [address, address],
  );
  expect(person.name).toBe('Gabriel');
  expect(person.document).toBe('');
  expect(person.id).not.toBeNull();
  expect(person.addresses).not.toBeNull();
  person.addresses.forEach((address) => {
    expect(address.id_person).toBe(person.id);
  });
});
