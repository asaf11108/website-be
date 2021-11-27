import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { GetPersonController } from './get-people.controller';

@Module({
  imports: [],
  controllers: [
    GetPersonController
  ],
  providers: [
    PersonService
  ],
})
export class PersonModule {}