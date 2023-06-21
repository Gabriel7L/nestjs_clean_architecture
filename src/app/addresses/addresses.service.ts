import { Injectable } from '@nestjs/common';

@Injectable()
export class AddressesService {
  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}
