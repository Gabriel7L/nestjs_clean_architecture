import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { peopleProvider } from 'src/providers/people.provider';

@Module({
  controllers: [PeopleController],
  providers: [PeopleService, ...Object.values(peopleProvider)],
})
export class PeopleModule {}
