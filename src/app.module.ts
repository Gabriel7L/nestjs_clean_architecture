import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './app/people/people.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './@core/db/conn/data-source';

@Module({
  imports: [PeopleModule, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
