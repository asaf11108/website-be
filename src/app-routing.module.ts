import { CarModule } from './models/car/car.module';
import { PeopleModule } from './models/people/person.module';
import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';

const routes: Routes = [
  {
    path: 'people',
    module: PeopleModule
  }
];

const modules = [PeopleModule, RouterModule.register(routes)];

@Module({
  imports: modules,
  exports: modules,
})
export class AppRoutingModule {}
