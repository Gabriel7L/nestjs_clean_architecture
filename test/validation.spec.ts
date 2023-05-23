import ValidationError from '../src/@core/domain/utils/errors/validation-error';
import ValidatorRules from '../src/@core/domain/utils/validations/validator-rules';
describe('Test of validation methods', () => {
  it('should validate required, maxlength, minlength, boolean and string', () => {
    const arrange = [
      {
        value: 'nullaaa',
        property: 'field',
      },
      {
        value: 'undefined',
        property: 'field',
      },
    ];
    arrange.forEach((item) => {
      const validation = ValidatorRules.SetRuleFor(item.value, item.property);
      expect(() => validation.Required().String().MaxLength(5)).toThrow(
        new ValidationError(
          'The field must be less or equal than 5 characters',
        ),
      );
    });
  });
});
