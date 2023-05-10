import { states } from 'src/@core/domain/addresses/addresses';
import AddressesInMemoryRepository from '../src/@core/db/repositories/in-memory/addresses/addresses-in-memory.repository';
import PeopleInMemoryRepository from '../src/@core/db/repositories/in-memory/people/people-in-memory.repository';
import CreatePerson from '../src/@core/use-cases/people/create-person';

test('Should be able to create a person', async function () {
  const peopleRepo = new PeopleInMemoryRepository();
  const addressesRepo = new AddressesInMemoryRepository();
  const createPerson = new CreatePerson(peopleRepo, addressesRepo);

  const address = {
    street: 'Rua Camilo Cristelli',
    city: 'Sete Lagoas',
    state: states.MG,
    complement: 'apto 902',
    number: '46',
    zip_code: '35700-070',
    district: 'Centro',
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
    expect(address.id_person).toBe(person.id);
  });
});
