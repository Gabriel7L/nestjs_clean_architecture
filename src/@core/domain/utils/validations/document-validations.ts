import { ValidationOptions, registerDecorator } from 'class-validator';
import { cnpj, cpf } from 'cpf-cnpj-validator';

export function ValidateDocument(
  property: string,
  validationOptions?: ValidationOptions,
) {
  // eslint-disable-next-line @typescript-eslint/ban-types
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'ValidateDocument',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: string) {
          if (!value && (cpf.isValid(value) || cnpj.isValid(value))) {
            return true;
          } else {
            return false;
          }
        },
      },
    });
  };
}
