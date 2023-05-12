import { HttpException } from '@nestjs/common';

export function ConvertStringToEnum(state: string): states {
  if (states[state]) {
    return states[state];
  } else {
    throw new HttpException(
      'Invalid state. ' +
        state +
        ' is not one of the following values: [' +
        Object.values(states) +
        ']',
      400,
    );
  }
}
export enum states {
  AL = 'AL',
  AC = 'AC',
  AP = 'AP',
  AM = 'AM',
  BA = 'BA',
  CE = 'CE',
  DF = 'DF',
  ES = 'ES',
  GO = 'GO',
  MA = 'MA',
  MT = 'MT',
  MS = 'MS',
  MG = 'MG',
  PA = 'PA',
  PB = 'PB',
  PR = 'PR',
  PE = 'PE',
  RR = 'RR',
  RO = 'RO',
  RJ = 'RJ',
  RN = 'RN',
  RS = 'RS',
  SC = 'SC',
  SP = 'SP',
  SE = 'SE',
  TO = 'TO',
}
