import { PersonModule } from './models/people/person.module';
import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { ReportsModule } from './reports/reports.module';

const routes: Routes = [
  {
    path: 'reports',
    module: ReportsModule,
  },
  {
    path: 'people',
    module: PersonModule
  }
];

const modules = [ReportsModule, PersonModule, RouterModule.register(routes)];

@Module({
  imports: modules,
  exports: modules,
})
export class AppRoutingModule {}
