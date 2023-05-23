import ValidationError from '../errors/validation-error';

export default class ValidatorRules {
  constructor(private value: any, private property: string) {}

  static SetRuleFor(value: any, property: string) {
    return new ValidatorRules(value, property);
  }

  Required() {
    if (this.value === null || this.value === undefined || this.value === '') {
      throw new ValidationError(`The ${this.property} is required`, 400);
    }
    return this;
  }

  String() {
    if (!IsEmpty(this.value) && typeof this.value !== 'string') {
      throw new ValidationError(`The ${this.property} must be a string`, 400);
    }
    return this;
  }
  MaxLength(max: number) {
    if (!IsEmpty(this.value) && this.value.length > max) {
      throw new ValidationError(
        `The ${this.property} must be less or equal than ${max} characters`,
        400,
      );
    }
    return this;
  }
  MinLength(min: number) {
    if (!IsEmpty(this.value) && this.value.length < min) {
      throw new ValidationError(
        `The ${this.property} must be greater or equal than ${min} characters`,
        400,
      );
    }
    return this;
  }
  Boolean() {
    if (typeof this.value !== 'boolean') {
      throw new ValidationError(`The ${this.property} must be a boolean`, 400);
    }
    return this;
  }
}
export function IsEmpty(value: string) {
  return value === null || value === undefined;
}
