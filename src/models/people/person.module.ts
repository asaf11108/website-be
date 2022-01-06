import { Module } from '@nestjs/common';
import { PeopleService } from './person.service';
import { PersonController } from './people.controller';
import { CarModule } from '../car/car.module';

@Module({
  imports: [
    CarModule
  ],
  controllers: [
    PersonController
  ],
  providers: [
    PeopleService
  ],
})
export class PeopleModule {}