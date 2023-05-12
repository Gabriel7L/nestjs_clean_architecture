import { HttpException } from '@nestjs/common';
import { cnpj, cpf } from 'cpf-cnpj-validator';

export default function ValidateDocument(document: string): string {
  if (cpf.isValid(document) || cnpj.isValid(document)) {
    return document.replace(/\D/g, '');
  } else {
    throw new HttpException('Invalid document', 404);
  }
}
