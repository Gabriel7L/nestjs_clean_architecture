import { states } from '../src/@core/domain/addresses/addresses';
import PeopleInMemoryRepository from '../src/@core/db/repositories/in-memory/people/people-in-memory.repository';
import CreatePerson from '../src/@core/use-cases/people/create-person';

test('Should be able to create a person', async function () {
  const peopleRepo = new PeopleInMemoryRepository();
  const createPerson = new CreatePerson(peopleRepo);

  const address = {
    street: 'Rua Camilo Cristelli',
    city: 'Sete Lagoas',
    state: states.MG,
    complement: 'apto 902',
    number: '46',
    zip_code: '35700-070',
    district: 'Centro',
    id_person: '123',
  };
  const person = await createPerson.createPerson({
    document: '09790967667',
    name: 'Gabriel',
    dt_birth: new Date(),
    addresses: [address, address],
  });
  console.log(person);
  expect(person.name).toBe('Gabriel');
  expect(person.document).toBe('09790967667');
  expect(person.id).not.toBeNull();
  expect(person.addresses).not.toBeNull();
  person.addresses.forEach((address) => {
    console.log(address);
  });
});
