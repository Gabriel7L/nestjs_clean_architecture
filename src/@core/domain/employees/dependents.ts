import { DependentsInput } from '@application/employees/dependents-input';
import { Basic } from '@domain/basic/basic';

export default class Dependents extends Basic {
  private constructor(props: DependentsInput, id?: number) {
    super();
    if (!props) return;
  }
}
