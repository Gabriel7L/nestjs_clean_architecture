import { HttpException } from '@nestjs/common';
import cep from 'cep-promise';
export async function ValidateZipCode(zip_code: string): Promise<string> {
  try {
    let result = '';
    await cep(zip_code, {})
      .then((response) => {
        result = response.cep;
      })
      .catch((e) => {
        throw new HttpException(e.message, 404);
      });
    return result;
  } catch (e) {
    throw new HttpException('Invalid zip code', 404);
  }
}
