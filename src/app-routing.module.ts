import { Module } from '@nestjs/common';
import { RouterModule, Routes } from '@nestjs/core';
import { ReportsModule } from './reports/reports.module';

const routes: Routes = [
  {
    path: 'reports',
    module: ReportsModule,
  },
];

const modules = [ReportsModule, RouterModule.register(routes)];

@Module({
  imports: modules,
  exports: modules,
})
export class AppRoutingModule {}
