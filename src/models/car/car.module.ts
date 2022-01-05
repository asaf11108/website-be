import { Module } from '@nestjs/common';
import { PeopleService } from './car.service';
import { CarController } from './car.controller';

@Module({
  imports: [],
  controllers: [
    CarController
  ],
  providers: [
    PeopleService
  ],
})
export class CarModule {}