import { Basic } from '../basic/basic';

export default class Emails extends Basic {
  email: string;
  id_person: number;

  constructor(
    props: Omit<Emails, 'id' | 'id_person' | 'dt_created' | 'dt_updated'>,
    id_person: number,
    id?: number,
  ) {
    super();
    Object.assign(this, props);
    this.id = id;
    this.id_person = id_person;
  }
}
