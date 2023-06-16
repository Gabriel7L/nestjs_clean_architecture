import { DependentsInput } from '@application/employees/dependents-input';
import { Basic } from '@domain/basic/basic';

export default class Dependents extends Basic {
  id_employee: number;
  id_dependency: number;
  id_person: number;
  relationship: string;

  private constructor(
    props: DependentsInput,
    id_employee?: number,
    id?: number,
  ) {
    super();
    if (!props) return;
    this.id_employee = id_employee;
    this.id = id;
  }

  static Create(props: DependentsInput, id_employee?: number, id?: number) {
    return new Dependents(props, id_employee, id);
  }
}
