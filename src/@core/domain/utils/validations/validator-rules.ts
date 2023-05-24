import { FieldsErrors } from './validator-fields-interface';

export default class ValidatorRules {
  private errors: FieldsErrors = null;
  constructor(private value: any, private property: string) {}

  static SetRuleFor(value: any, property: string) {
    return new ValidatorRules(value, property);
  }

  Required() {
    if (this.value === null || this.value === undefined || this.value === '') {
      this.errors[this.property] = ['The value is required'];
    }
    return this;
  }

  String() {
    if (!IsEmpty(this.value) && typeof this.value !== 'string') {
      this.errors[this.property] = ['The value must be a string'];
    }
    return this;
  }
  MaxLength(max: number) {
    if (!IsEmpty(this.value) && this.value.length > max) {
      this.errors[this.property] = [
        'The value must be less than ' + max + ' characters',
      ];
    }
    return this;
  }
  MinLength(min: number) {
    if (!IsEmpty(this.value) && this.value.length < min) {
      this.errors[this.property] = [
        'The value must be more than ' + min + ' characters',
      ];
    }
    return this;
  }
  Boolean() {
    if (!IsEmpty(this.value) && typeof this.value !== 'boolean') {
      this.errors[this.property] = ['The value must be a boolean'];
    }
    return this;
  }
  // ValidDocument(document: string) {
  //   if (!IsEmpty(this.value) && ValidateDocument(document)) {
  //     this.errors[this.property] = ['The value must be a valid document'];
  //   }
  //   return this;
  // }
}

export function IsEmpty(value: string) {
  return value === null || value === undefined;
}
