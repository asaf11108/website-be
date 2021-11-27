import { Module } from '@nestjs/common';
import { PeopleService } from './person.service';
import { PersonController } from './people.controller';

@Module({
  imports: [],
  controllers: [
    PersonController
  ],
  providers: [
    PeopleService
  ],
})
export class PeopleModule {}